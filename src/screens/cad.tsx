import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import * as Yup from 'yup'

interface CadProps {
}

const Cad: React.FC<CadProps> = (props) => {
    const nav = useNavigation<any>()
    function cad() {
        nav.navigate('login')
    }

    const schema = Yup.object().shape({
        email: Yup.string().required('email obrgatrio'),
        password: Yup.string().required('senha obrgitario').min(4, 'Tamanho mínimo de 6 caracteres'),
        passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas não combinam')
    })

    const handleCad = async (values: any) => {
        console.log(values);
        nav.navigate('login')
    }

    return (

        <Formik
            initialValues={{ email: '', password: '', passwordConfirmation: '' }}
            validationSchema={schema}
            onSubmit={handleCad}
        >
            {({ values, touched, errors, handleSubmit, setFieldValue, isSubmitting }) => (
                <View style={styles.container}>
                    <View style={styles.errorContainer}>
                        {Object.values(errors).map(error => error && (<Text key={error} style={{ color: 'red' }}>{error}</Text>))}
                    </View>
                    <Image source={require('./../assets/star.png')} style={{ width: 228, height: 210 }} />
                    <View>
                        <Text style={styles.text}>
                            Email
                        </Text>
                        <TextInput value={values.email} style={styles.textInput} placeholder='Email' onChangeText={(text) => setFieldValue('email', text)} />
                        <Text style={styles.text}>
                            Senha
                        </Text>
                        <TextInput value={values.password} secureTextEntry={true} style={styles.textInput} placeholder='Senha' onChangeText={(text) => setFieldValue('password', text)} />
                        <Text style={styles.text}>
                            Confirmação de Senha
                        </Text>
                        <TextInput value={values.passwordConfirmation} secureTextEntry={true} style={styles.textInput} placeholder='Confirmação de Senha' onChangeText={(text) => setFieldValue('passwordConfirmation', text)} />
                        {isSubmitting ? <ActivityIndicator size={20} color="#000" /> : (
                            <Button buttonStyle={[styles.button, { backgroundColor: '#01C38E' }]} title={'Cadastre-se'} onPress={() => handleSubmit()} />
                        )}
                        <Button buttonStyle={[styles.button, { backgroundColor: 'red' }]} title={'Voltar'} onPress={() => nav.navigate('login')} />


                    </View>
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 30,
        flex: 1,
        backgroundColor: '#00004d',


    },
    errorContainer: {
        alignItems: 'center',
    },
    text: {
        marginTop: 10,
        margin: 'auto',
        color: 'white'

    },
    textInput: {
        textAlign: 'center',
        margin: 'auto',
        position: 'relative',
        width: 229,
        height: 36,
        backgroundColor: 'white',
        borderRadius: 4

    },
    button: {
        marginTop: 7


    }


})
export default Cad
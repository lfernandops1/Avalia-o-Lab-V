import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import * as Yup from 'yup'

interface LoginProps {
}

const Login: React.FC<LoginProps> = (props) => {
    const nav=useNavigation<any>()
    function login(){
        nav.navigate('main')
    }

    const schema = Yup.object().shape({
        email: Yup.string().required('email obrgatrio'),
        password: Yup.string().required('senha obrgitario').min(6, 'o')
    })

    const handleLogin = async (values: any) => {
        await new Promise(resolve => setTimeout(resolve, 5000))

        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    }

    return (

        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={schema}
            onSubmit={handleLogin}
        >
            {({ values, touched, errors, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
                <View style={styles.container}>
                {touched.email && errors.email && <Text style={{ color: 'red' }}>erro</Text>}    
                <Image source={require('./../assets/star.png')} style={{width:228, height: 210}}/>
                <View>
                    <Text style={styles.text}>
                        Email
                    </Text>
                    <TextInput style={styles.textInput} placeholder='Email' onChangeText={handleChange('password')} />
                    <Text style={styles.text}>
                        Senha
                    </Text>
                    <TextInput style={styles.textInput} placeholder='Senha' onChangeText={handleChange('password')} />
                    {isSubmitting ? <ActivityIndicator size={20} color="#000" /> : (
                        <Button buttonStyle={[styles.button, { backgroundColor: '#01C38E'}]} title={'Entrar'} onPress={() => handleSubmit()}/>
                    )}
                    
                    <Button buttonStyle={[styles.button,  { backgroundColor: 'red'}]} title={'Cadastre-se'} />
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
    button:{
        marginTop: 7


    }


})
export default Login
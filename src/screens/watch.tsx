import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Linking, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

interface WatchProps {
}

const Watch: React.FC<WatchProps> = (props) => {
    const nav = useNavigation<any>();
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Button buttonStyle={[styles.button, { backgroundColor: 'red' }]} title={'Historico de Jogos'} />

                <View style={{ marginTop: 30, marginBottom: 30 }}>
                    <View>
                        <Button buttonStyle={[styles.button, { backgroundColor: 'red' }]} title={'LINEFA 2018 - Maceió Marechais 30 x 00 Sergipe Redentores'} />
                        <Button buttonStyle={[styles.button, { backgroundColor: '#01C38E' }]} title={'ASSISTIR A ESTE JOGO'} onPress={() => Linking.openURL('https://youtu.be/a9nUHum7XEk') } />
                    </View>
                    <View>
                        <Button buttonStyle={[styles.button, { backgroundColor: 'red' }]} title={'LINEFA 2018 - Maceió Marechais 30 x 00 Sergipe Redentores'} />
                        <Button buttonStyle={[styles.button, { backgroundColor: '#01C38E' }]} title={'ASSISTIR A ESTE JOGO'} onPress={() => Linking.openURL('https://youtu.be/a9nUHum7XEk') } />
                    </View>
                    <View>
                        <Button buttonStyle={[styles.button, { backgroundColor: 'red' }]} title={'LINEFA 2018 - Maceió Marechais 30 x 00 Sergipe Redentores'} />
                        <Button buttonStyle={[styles.button, { backgroundColor: '#01C38E' }]} title={'ASSISTIR A ESTE JOGO'} onPress={() => Linking.openURL('https://youtu.be/a9nUHum7XEk') } />
                    </View>

                </View>

                <Button buttonStyle={[styles.button, { backgroundColor: 'red' }]} title={'Voltar ao Inicio'} onPress={() => nav.navigate('main')} />


            </View>

        </View>
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
    button: {
        marginTop: 7


    }


})
export default Watch
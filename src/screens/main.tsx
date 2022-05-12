import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Linking, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import BuyTicket from './buyticket';

interface MainProps {
}


const Main: React.FC<MainProps> = (props) => {
    const nav=useNavigation<any>()
    function buytickets(){
        nav.navigate('buyticket')
    }
    return (

        <View style={styles.container}>
            <Image source={require('./../assets/star.png')} style={{width:228, height: 210}}/>
            <View>
                <Button buttonStyle={[styles.button,  { backgroundColor: 'red'}]} title={'Comprar Ingressos'} onPress={buytickets} />
                <Button buttonStyle={[styles.button,  { backgroundColor: 'red'}]} title={'Instagram'} onPress={() => Linking.openURL('https://www.instagram.com/maceiomarechais/') } />
                <Button buttonStyle={[styles.button,  { backgroundColor: 'red'}]} title={'Fotos'} onPress={() => nav.navigate('team')}/> 
                <Button buttonStyle={[styles.button,  { backgroundColor: 'red'}]} title={'Historico dos Jogos'} onPress={() => nav.navigate('watch')} />
                <Button buttonStyle={[styles.button,  { backgroundColor: 'red'}]} title={'Sair'} onPress={() => nav.navigate('login')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
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
export default Main
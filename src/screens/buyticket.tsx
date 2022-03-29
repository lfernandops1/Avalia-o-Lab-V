import * as React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';

interface BuyTicketProps {
}

const BuyTicket: React.FC<BuyTicketProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Button buttonStyle={[styles.button,  { backgroundColor: 'red'}]} title={'Comprar Ingressos'} />
                <Image source={require('./../assets/star.png')} style={{width:228, height: 210}}/>
                <Button buttonStyle={[styles.button,  { backgroundColor: 'red'}]} title={'Maceió Marechais x João Pessoa Espectros\n 22/06/2022'} />
                <Button buttonStyle={[styles.button, { backgroundColor: '#01C38E'}]} title={'COMPRAR'}/>

                <Button buttonStyle={[styles.button,  { backgroundColor: 'red'}]} title={'Voltar ao Inicio'} />

               
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
    button:{
        marginTop: 7


    }


})
export default BuyTicket
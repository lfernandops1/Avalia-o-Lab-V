import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';


interface TeamProps {
}

const Team: React.FC<TeamProps> = (props) => {
    const nav = useNavigation<any>();


    const carouselItems = [
        {
            title: "Item 1",
            link: 'https://i.imgur.com/7wSt3de.png',
            
        },
        {
            title: "Item 2",
            link: 'https://i.imgur.com/7wSt3de.png',
            
        },
        {
            title: "Item 3",
            link: 'https://i.imgur.com/7wSt3de.png',
            
        },
    ]

    const renderItem = ({ item, index }: any) => {
        console.log(item.link)
        return (
            <View>
                <View style={{
                    borderRadius: 5,
                    height: 375,
                    padding: 30,
                    // marginLeft: 25,
                    // marginRight: 25,
                }}>

                    {/* <Image source={require(item.link)} style={{ width: 228, height: 320 }} /> */}
                    <Image source={{ uri: item.link }} style={{ width: 228, height: 320 }} />
                    <Button buttonStyle={[styles.button, { backgroundColor: 'red' }]} title={item.text} />
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Button buttonStyle={[styles.button, { backgroundColor: 'red' }]} title={'Fotos'} />

                <SafeAreaView style={{ flex: 1, backgroundColor: '#00004d', paddingTop: 50, }}>
                    
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>


                        <Carousel
                            // ref={(c) => { this._carousel = c; }}
                            data={carouselItems}
                            layout={"default"}
                            renderItem={renderItem}
                            sliderWidth={300}
                            itemWidth={300}
                        />
                    </View>
                </SafeAreaView>

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
        marginTop: 15


    }


})
export default Team
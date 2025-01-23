import { Image, ImageBackground, StyleSheet, Text } from 'react-native'
import React from 'react'

import { Icons, Images } from '../assets'


const CustomHeader: React.FC = () => {
    return (
        <ImageBackground source={Images.img} style={styles.head}>
            <Image source={Icons.logo} style={styles.logo} />
            <Text style={styles.text1}>QUIVIO</Text>
            <Text style={styles.text2}>Complete Business Management</Text>
        </ImageBackground>

    )
}

export default CustomHeader

const styles = StyleSheet.create({
    head: {
        height: 397,
        justifyContent: 'flex-end',
        padding: 30,
    },
    logo: {
        width: 240,
        height: 83,
        resizeMode: 'contain'
    },
    text1: {
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 40,
    },
    text2: {
        fontFamily: 'Montserrat-Light',
        color: 'white',
        fontSize: 26,
    },
})
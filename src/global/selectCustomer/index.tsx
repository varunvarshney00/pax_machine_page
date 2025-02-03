import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icons } from '../../assets'

type Props = {}

const SelectCustomer = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <View style={styles.image} >
                    <Image source={Icons.SelectCustomer} style={styles.icon} />
                </View>
                <Text style={styles.selectcustomer}>
                    Select Customer
                </Text>

            </View>
        </View>
    )
}

export default SelectCustomer

const styles = StyleSheet.create({
    container: {
        borderWidth: .12,
        borderColor: '#307184',
        height: 81,
        width: 320,
        alignSelf: 'center',
        backgroundColor: '#0E1F2C',
        borderRadius: 7.62,
        marginTop: 20,
        marginBottom: 16,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    subcontainer: {
        width: 300.95,
        height: 46,
        backgroundColor: '#53c3dd',
        alignSelf: 'center',
        borderRadius: 7.62,
        alignItems: 'center',
        marginTop: 25
    },
    selectcustomer: {
        fontSize: 13,
        lineHeight: 18.2,
        letterSpacing: -.02,
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 18,
    },
    image: {
        width: 40,
        height: 20, // Half of the width
        backgroundColor: "#0E1F2C",
        borderBottomLeftRadius: 50, // Half of width
        borderBottomRightRadius: 50, // Half of width
        position: 'absolute',
        zIndex: 999,
        // top: -4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 34.05,
        height: 34.05,
        resizeMode: 'contain',
        top: -11.5,
        left: -.5
    }
})
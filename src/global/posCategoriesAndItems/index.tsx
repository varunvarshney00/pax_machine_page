/* eslint-disable quotes */
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import { Icons } from '../../assets';
import {vh,vw} from '../../utils/scaling'

type Props = {}

const data = [
    { id: "1", title: 'Promotion' },
    { id: "2", title: "Unlimited Plan" },
    { id: "3", title: "Washes" },
    { id: "4", title: "Merchandise" },
    { id: "5", title: "Prepaid" },
    { id: "6", title: "Pos Function" },
    { id: "7", title: "Promotion" },

];

const PosCategoriesAndItems = (props: Props) => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardtext}>{item.title}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <View style={styles.header}>
                    <Text style={styles.postext}>
                        POS Categories & Items
                    </Text>

                    <View style={styles.twoicons}>
                        <Image source={Icons.Scan} style={styles.iconimage} />
                        <Image source={Icons.SearchWithColor} style={styles.iconimage} />
                    </View>
                </View>

                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.bodycontainer}
                    numColumns={3}
                    showsVerticalScrollIndicator
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: vw(320),
        height: vh(240.44),
        borderWidth: .12,
        backgroundColor: '#0e1f2c',
        alignSelf: "center",
        borderRadius: 8.57,
        borderColor: '#307184',
        justifyContent: 'center'
    },
    subcontainer: {
        width: vw(300),
        height: vh(216.44),
        alignSelf: 'center',
    },
    postext: {
        color: '#ffffff',
        fontSize: 14,
        width: vw(227.68),
        fontFamily: 'Montserrat-SemiBold'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    twoicons: {
        flexDirection: 'row',
        gap: vw(10.67)
    },
    iconimage: {
        width: vw(28.44),
        height: vw(28.44),
        resizeMode: 'contain'
    },
    bodycontainer: {
        width: vw(300),
        height: vh(172),
        marginTop: vh(16),
        // flexDirection: 'row',
        // gap: 7.9,
    },
    card: {
        borderColor: '#8AD6E8',
        // borderBottomColor: 'yellow',
        width: vw(90.48),
        height: vh(78),
        borderRadius: 8,
        backgroundColor: '#102c41',
        borderBottomWidth: 0.95,
        // borderBottomWidth: 5,
        justifyContent: 'center',
        marginRight: vw(7.9),
        marginBottom: vh(16)
    },
    cardtext: {
        color: '#ffffff',
        fontSize: 12,
        width: vw(67),
        fontFamily: 'Montserrat-SemiBold',
        alignSelf: 'center',
        textAlign: 'center',
    }
})

export default PosCategoriesAndItems
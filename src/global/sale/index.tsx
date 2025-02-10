import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icons, Images } from '../../assets'


const Sale = () => {


    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Image source={Icons.cartBlue} style={styles.cartblue} />
                <Text style={{ color: 'white', fontFamily: 'Montserrat-SemiBold', fontSize: 14 }}>Sale</Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={Icons.arrowRight} style={styles.rightarrow} />
            </TouchableOpacity>


            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={() => setModalVisible(false)}
                />
                <View style={styles.modalcontainer}>


                    {/* modal header */}
                    <View style={styles.modalHeader}>
                        <Text style={styles.heading}>Sale</Text>


                        <View style={styles.voidsaleandclose}>
                            <TouchableOpacity style={styles.voidsalebox}>
                                <Text style={styles.voidsale}>Void Sale</Text>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeModalContainer}>
                                <Image source={Icons.Cross} style={styles.closemodal} />
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* table header */}
                    <View style={styles.tableheader}>
                        <Text style={styles.heading}>Item(s)</Text>
                        <View style={styles.tablesub}>
                            <Text style={[styles.heading, { width: 50 }]}>Qty.</Text>
                            <Text style={[styles.heading, { width: 60 }]}>Price</Text>
                        </View>
                    </View>


                    {/* no sale found */}
                    <View>
                        <Image source={Images.noSaleFound} style={styles.nosalefound} />
                    </View>


                    {/* amount */}
                    <View style={styles.amountcontainer}>
                        <View>
                            <View style={[styles.textcontainer, { gap: 40 }]}>
                                <Text style={styles.subheading}>Sub:</Text>
                                <Text style={styles.heading}>$0.00</Text>
                            </View>


                            <View style={[styles.textcontainer, { gap: 42 }]}>
                                <Text style={styles.subheading}>Fee:</Text>
                                <Text style={styles.heading}>$0.00</Text>
                            </View>


                            <View style={[styles.textcontainer, { gap: 41 }]}>
                                <Text style={styles.subheading}>Due</Text>
                                <Text style={styles.heading}>$0.00</Text>
                            </View>
                        </View>




                        <View>
                            <View style={[styles.textcontainer, { gap: 66 }]}>
                                <Text style={styles.subheading}>Tax:</Text>
                                <Text style={styles.heading}>$0.00</Text>
                            </View>


                            <View style={[styles.textcontainer, { gap: 24 }]}>
                                <Text style={styles.subheading}>Tendered:</Text>
                                <Text style={styles.heading}>$0.00</Text>
                            </View>
                        </View>
                    </View>


                    {/* Payment */}
                    <View style={styles.subsubcontainer}>
                        <Text style={styles.selectcustomer}>
                            Payment
                        </Text>
                    </View>


                </View>


            </Modal >
        </View >
    )
}


export default Sale


const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: 320,
        height: 57.14,
        backgroundColor: '#0e1f2c',
        marginTop: 16,
        borderRadius: 8,
        borderWidth: .12,
        padding: 10,
        borderColor: "#307184",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cartblue: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
        marginRight: 2.8
    },
    rightarrow: {
        height: 37.14,
        width: 37.14,
        resizeMode: 'contain'
    },
    subcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    modalcontainer: {
        height: 530.6,
        backgroundColor: '#0e1f2c',
        paddingVertical: 16,
        paddingHorizontal: 20,
        flex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%'


    },
    heading: {
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        lineHeight: 22.4,
        letterSpacing: -.02
    },
    modalHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    voidsale: {
        color: '#f04438',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        lineHeight: 15.6,
        letterSpacing: -.01
    },
    voidsalebox: {

        paddingHorizontal: 32,
        paddingVertical: 8,
        borderRadius: 6,
        borderWidth: 0.5,
           borderColor: '#f04438',
        // borderColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeModalContainer: {
        padding: 10.74,
        borderRadius: 6.15,
        borderWidth: 0.35,
        borderColor: 'white'
    },
    closemodal: {
        //    height: 10.35,
        //    width: 10.35,
        height: 20.71,
        width: 20.71,
        resizeMode: 'contain'
    },
    voidsaleandclose: {
        flexDirection: 'row',
        gap: 10
    },
    tableheader: {
        height: 42,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        borderBottomWidth: 0.5,
        borderColor: '#3e4c56'
    },
    tablesub: {
        flexDirection: 'row',
        gap: 22
    },
    nosalefound: {
        width: 320,
        height: 149.6,
        resizeMode: 'contain',
        marginTop: 32,
        alignSelf: 'center',
        marginBottom: 54
    },
    amountcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: .5,
        borderColor: '#3e4c56'
    },
    subheading: {
        fontFamily: 'Montserrat-Regular',
        color: '#abb3ba',
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: -.02
    },
    textcontainer: {
        flexDirection: 'row',
        marginBottom: 12
    },
    subsubcontainer: {
        width: 320,
        height: 54,
        backgroundColor: '#307184',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 12,
        justifyContent: 'center'
    },
    selectcustomer: {
        fontSize: 16,
        lineHeight: 20.8,
        letterSpacing: -.01,
        fontFamily: 'Montserrat-SemiBold',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark semi-transparent backdrop
    }
})




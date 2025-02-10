// Customers.tsx
import { Image, ScrollView, View } from 'react-native';
import React from 'react';
import Header from '../../global/header';
import { styles } from './style';
import CustomInput from '../../global/search';
import { Images } from '../../assets';
import Card from '../../global/card';
import { useNavigation } from '@react-navigation/native';

const Listing = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View>
                <Header title={'Customers Management'} subtitle={'120 Customers'} onPress={()=>navigation.goBack()}/>
            </View>

           <View style={{marginTop:20,}}>
            <View  style={styles.cardContainer}>
                <Card Name={'John Serrano'}    LoyalityPoints={22}   CustomerNo={'QUVI390023'}  LoyalityNumber={22030214338}  LicensePlate={'QUVIO23'} LastVisit={'12/11/2024'}  
                 PhoneNo={'+1 7838 333 323'}

                />
            </View>

         
            <View  style={styles.cardContainer}>
            <Card Name={'John Serrano'}    LoyalityPoints={22}   CustomerNo={'QUVI390023'}  LoyalityNumber={22030214338}  LicensePlate={'QUVIO23'} LastVisit={'12/11/2024'}  
                 PhoneNo={'+1 7838 333 323'}

                />
            </View>

            <View  style={styles.cardContainer}>
            <Card Name={'John Serrano'}    LoyalityPoints={22}   CustomerNo={'QUVI390023'}  LoyalityNumber={22030214338}  LicensePlate={'QUVIO23'} LastVisit={'12/11/2024'}  
                 PhoneNo={'+1 7838 333 323'}

                />
            </View>

            <View  style={styles.cardContainer}>
            <Card Name={'John Serrano'}    LoyalityPoints={22}   CustomerNo={'QUVI390023'}  LoyalityNumber={22030214338}  LicensePlate={'QUVIO23'} LastVisit={'12/11/2024'}  
                 PhoneNo={'+1 7838 333 323'}

                />
            </View>

            <View  style={styles.cardContainer}>
            <Card Name={'John Serrano'}    LoyalityPoints={22}   CustomerNo={'QUVI390023'}  LoyalityNumber={22030214338}  LicensePlate={'QUVIO23'} LastVisit={'12/11/2024'}  
                 PhoneNo={'+1 7838 333 323'}

                />
            </View>
            </View>
       
        </ScrollView>
    );
};

export default Listing;

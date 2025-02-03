// Customers.tsx
import { Image, ScrollView, View } from 'react-native';
import React from 'react';
import Header from '../../global/header';
import { styles } from './styles';
import CustomInput from '../../global/search';
import { Images } from '../../assets';
import Card from '../../global/card';

const Customers = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Header title={'Customers Management'} subtitle={'120 Customers'} />
            </View>

            {/* <View style={styles.searchContainer}>
                <CustomInput
                    leftIcon={<Image source={Images.Search} style={styles.searchIcon} />}
                    containerStyle={styles.inputcolor}
                    placeholder="Search"
                    placeholderTextColor={'#abb3ba'}
                />
                <Image source={Images.Filter} style={styles.filterIcon} />
            </View> */}
           

            <View  style={styles.cardContainer}>
                <Card Name={'John Serrano'} ID={562030214338} LoyaltyPoints={22} LoyaltyNo={22030214338} Membership={'Yes'} Vehicle={'QUVIO23'} LastVisit={'12/11/2024'} />
            </View>

            {/* another card */}
            <View  style={styles.cardContainer}>
                <Card Name={'John Serrano'} ID={562030214338} LoyaltyPoints={22} LoyaltyNo={22030214338} Membership={'Yes'} Vehicle={'QUVIO23'} LastVisit={'12/11/2024'} />
            </View>

            <View  style={styles.cardContainer}>
                <Card Name={'John Serrano'} ID={562030214338} LoyaltyPoints={22} LoyaltyNo={22030214338} Membership={'Yes'} Vehicle={'QUVIO23'} LastVisit={'12/11/2024'} />
            </View>

            <View  style={styles.cardContainer}>
                <Card Name={'John Serrano'} ID={562030214338} LoyaltyPoints={22} LoyaltyNo={22030214338} Membership={'Yes'} Vehicle={'QUVIO23'} LastVisit={'12/11/2024'} />
            </View>

            <View  style={styles.cardContainer}>
                <Card Name={'John Serrano'} ID={562030214338} LoyaltyPoints={22} LoyaltyNo={22030214338} Membership={'Yes'} Vehicle={'QUVIO23'} LastVisit={'12/11/2024'} />
            </View>
       
        </ScrollView>
    );
};

export default Customers;

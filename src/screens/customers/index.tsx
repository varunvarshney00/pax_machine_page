
import {  ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../global/header';
import { styles } from './styles';
import CustomInput from '../../global/InputField2';
import { Icons } from '../../assets';
import CustomButton from '../../global/button';
import { useNavigation } from '@react-navigation/native';

const Customers = () => {
    const navigation= useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone,setPhone] =useState('');
    const [customerNo,setCustomerNo] =useState('');
    const [loyality,setLoyalityNo] =useState('');
    return (
      
        <ScrollView style={styles.container}>
            <View>
                <Header title={'Customers Management'} subtitle={'120 Customers'} />
            </View>

           <View style={styles.inputValues} >
           <View style={styles.inputConatiner}>
           <CustomInput
              label="First Name"
              icon1={Icons.account}
              icon2={Icons.Cross}
              value={firstName}
            onChangeText={setFirstName}
             
            />
           </View>
           <View style={styles.inputConatiner}>
           <CustomInput
            label="Last Name"
            icon1={Icons.account}
            value={lastName}
            onChangeText={setLastName}
            icon2={Icons.Cross} 
          />
           </View>
           
           <View style={styles.inputConatiner}>

             <CustomInput
              label="Phone Number"
              icon1={Icons.Phone}
              keyboardType='numeric'
              value={phone}
              onChangeText={setPhone}
              icon2={Icons.Cross} 
              
            />
           </View>
           <View style={styles.inputConatiner}>

             <CustomInput
              label="Loyality Number"
              icon1={Icons.Trophy}
              icon2={Icons.Cross}
              value={loyality}
              onChangeText={setLoyalityNo}
              
            />
           </View>
           <View style={styles.inputConatiner}>

             <CustomInput
              label="Customer Number"
              icon1={Icons.CustomerNo}  
              value={customerNo}
              onChangeText={setCustomerNo}
              icon2={Icons.Cross} 
              keyboardType='numeric'

            />
           </View>
            
        <View style={styles.buttonWrap}>
        <CustomButton onPress={()=>navigation.navigate('Listing')} text='Search'/>
        </View>
       
         
           

            </View>
       
        </ScrollView>
    );
};

export default Customers;

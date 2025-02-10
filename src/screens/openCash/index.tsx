import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../global/button';
import CustomInput from '../../global/textInput';
import CustomToast from '../../global/toast';
import { Icons, Images } from '../../assets';
import CustomHeader from '../../global/loginHeader';
import { styles } from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const OpenCash = () => {
  const [cashAmount, setCashAmount] = useState(''); 
  const [disable, setDisable] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastIcon, setToastIcon] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
   
    if (cashAmount) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [cashAmount]); 

  const handleConfirm = () => {
    if (!cashAmount || isNaN(cashAmount)) {
      setToastMessage('Please enter a valid cash amount');
      setToastIcon(Icons.error);
      setToastVisible(true);
    } else {
      console.log('Cash Amount:', cashAmount);
      navigation.navigate("LoginScreen");
    }

    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={Images.backgroundImg} style={styles.body}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}
            bounces={false}
            contentInsetAdjustmentBehavior="always"
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            extraScrollHeight={5}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <CustomHeader />

            <View style={styles.textContainer}>
              <Text style={styles.text1}>Enter Cash Amount</Text>
              <Text style={styles.text2}>Start Cash Amount in Drawer</Text>
            </View>

           <View style={styles.inputWrap}>

            <CustomInput
              label="Enter Cash Amount"
              icon1={Icons.dollar}
              value={cashAmount}
              keyboardType="numeric" 
              onChangeText={(text) => setCashAmount(text)} 
            />
           </View>

            

            <CustomButton
              text="Confirm"
              style={{
                marginTop: 36,
                marginHorizontal: 24,
                opacity: disable ? 0.8 : 1,
              }}
              onPress={handleConfirm}
              disable={disable}  
            />
       
           

          </KeyboardAwareScrollView>
          <CustomToast msg={toastMessage} icon={toastIcon} visible={toastVisible} />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OpenCash;





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

const StartShift = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const [disable, setDisable] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastIcon, setToastIcon] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    if (email && password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
  
    if (!/^\d+$/.test(email)) {
      setToastMessage('User ID must be numeric');
      setToastIcon(Icons.error);
      setToastVisible(true);
      return;
    }
    if (email.startsWith('0')) {
      setToastMessage('User ID cannot start with 0');
      setToastIcon(Icons.error);
      setToastVisible(true);
      return;
    }

   
    if (password.startsWith('0')) {
      setToastMessage('Password cannot start with 0');
      setToastIcon(Icons.error);
      setToastVisible(true);
      return;
    }


    console.log('Login successful!');
    navigation.navigate("OpenCash");

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
              <Text style={styles.text1}>Employee Login</Text>
              <Text style={styles.text2}>Enter User ID and password</Text>
            </View>

          <View style={styles.inputWrap}>
          <CustomInput
              label="User ID"
              icon1={Icons.account}
              value={email}
              onChangeText={setEmail}
              keyboardType="numeric"  
            />
          </View>
           

          <View style={styles.inputWrap}>

            <CustomInput
              label="Password"
              secureTextEntry={!showPassword} 
              icon2={Icons.eyeoff}
              icon1={Icons.lock}
              icon3={Icons.eye}
              value={password}
              keyboardType="numeric"  
              onChangeText={setPassword}
              error={passwordError}
              onPressIcon={togglePasswordVisibility}  
            />
          </View>

            <CustomButton
              text="Login"
              style={{
                marginTop: 36,
                marginHorizontal: 24,
                opacity: disable ? 0.8 : 1,
              }}
              onPress={handleLogin}
              disable={disable}
            />

          </KeyboardAwareScrollView>
          <CustomToast msg={toastMessage} icon={toastIcon} visible={toastVisible} />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartShift;




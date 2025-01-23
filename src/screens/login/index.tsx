import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomButton from '../../global/customButton';
import CustomInput from '../../global/customTextInput';
import { Icons, Images } from '../../assets';
import CustomHeader from '../../global/customHeader';
import CustomToast from '../../global/customToast';
import { useNavigation } from '@react-navigation/native';
// import CustomButton from '../components/customButton'

// import CustomHeader from '../components/customHeader';
// import CustomInput from '../components/global/customTextInput';
// import { Icons, Images } from '../assets';
// import CustomToast from '../components/customToast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
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

    const handleLogin = () => {
        const isEmailValid = email.includes('@');
        const isPasswordValid = password.length >= 6;
        setEmailError(!isEmailValid);
        setPasswordError(!isPasswordValid);


        if (!isEmailValid) {
            setToastMessage('Invalid Email');
            setToastIcon(Icons.error);
            setToastVisible(true);
        }

        if (!isPasswordValid) {
            setToastMessage('Invalid Password');
            setToastIcon(Icons.error);
            setToastVisible(true);
        }


        if (isEmailValid && isPasswordValid) {
            console.log('Login successful!');
            setToastMessage('Login successful!');
            setToastIcon(Icons.error);
            setToastVisible(true);
        } else {
            console.log('Please correct the errors.');
        }

        navigation.navigate("BottomTabNavigator")


        setTimeout(() => {
            setToastVisible(false);
        }, 3000);
    };

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader />

            <ImageBackground source={Images.backgroundImg} style={styles.body}>
                <View style={styles.overlay}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>Employee Login</Text>
                        <Text style={styles.text2}>Enter User ID and password</Text>
                    </View>

                    <CustomInput
                        label="Email"
                        icon1={Icons.account}
                        value={email}
                        onChangeText={setEmail}
                        error={emailError}
                    />

                    <CustomInput
                        label="Password"
                        secureTextEntry={true}
                        icon2={Icons.eyeoff}
                        icon1={Icons.lock}
                        value={password}
                        onChangeText={setPassword}
                        error={passwordError}
                    />

                    <CustomButton
                        text="Login"
                        style={{
                            marginVertical: 40,
                            marginHorizontal: 30,
                            opacity: disable ? 0.8 : 1,
                        }}
                        onPress={handleLogin}
                        disable={disable}
                    />
                </View>
            </ImageBackground>


            <CustomToast msg={toastMessage} icon={toastIcon} visible={toastVisible} />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    body: {
        resizeMode: "cover",
        height: 1050,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    textContainer: {
        paddingTop: 20,
        marginHorizontal: 30,
        marginBottom: 30,
    },
    text1: {
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 38,
    },
    text2: {
        fontFamily: 'Montserrat-Light',
        color: 'white',
        fontSize: 24,
    },
    button: {
        marginVertical: 40,
        marginHorizontal: 30,
    },
});
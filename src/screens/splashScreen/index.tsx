import { ImageBackground, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { Icons, Images } from '../../assets';
import { useNavigation } from '@react-navigation/native'; 

const SplashScreen = () => {
  const navigation = useNavigation(); 

  useEffect(() => {

    const timer = setTimeout(() => {
      navigation.navigate('StartShift'); 
    }, 5000);


    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground source={Images.splashScreen} style={styles.main}>
      <Image source={Icons.splashLogo} style={styles.logo1} />
      <View style={styles.middle}>
        <Text style={styles.text}>Powered By:</Text>
        <Image source={Icons.sonnyLogo} style={styles.sonnyLogo}/>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  middle: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo1: {
    width: 128.35,
    height: 44.6,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 15.65,
    fontFamily: 'Roboto-Regular',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sonnyLogo:{
    width: 78.26,
    height: 21.74,
    resizeMode: 'contain',
  }
});

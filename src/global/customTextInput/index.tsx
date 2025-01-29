import React, { useState, useRef } from 'react';
import { Image, StyleSheet, View, TextInput, Animated } from 'react-native';
import { Icons } from '../../assets';

const CustomTextInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const placeholderTop = useRef(new Animated.Value(0)).current; 

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(placeholderTop, {
      toValue: -20, 
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (value === '') {
      setIsFocused(false);
      Animated.timing(placeholderTop, {
        toValue: 0, 
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.left}>
        <Image source={Icons.account} style={styles.image} />
      </View>
       
      <View style={styles.inputContainer}>
      <Animated.Text 
          style={[
            styles.placeholder,
            {
              transform: [{ translateY: placeholderTop }],
              fontSize: isFocused || value ? 20 : 24, 
            },
          ]}
        >
          Input
        </Animated.Text>
      

        <TextInput
          style={[
            styles.textInput,
            {
              paddingTop: isFocused ? 12 : 0,
              paddingBottom:isFocused?-13:0,
              fontSize:20,
              color: 'white',
              fontWeight: 'bold',
            },
          ]}
          value={value}
          onChangeText={setValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder=""
        />
      </View>

      <View style={styles.right}>
        <Image source={Icons.eye} style={styles.image} />
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical:10
 
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  inputContainer: {
    flex: 1,
    position: 'relative',
    marginLeft: 10,
  },
  placeholder: {
    position: 'absolute',
    left: 9,
    color: 'white',
    fontWeight: 'bold',
    top: 12,
   
  },
  textInput: {
    height: 60,  
    paddingHorizontal: 10,
   justifyContent:'center',
   alignItems:'center'
   
  },
});


import React, { useState } from 'react';
import { View, Image, Text, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './style';

interface CustomInputProps {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  icon1?: any;  
  icon2?: any;  
  icon3?: any;  
  error?: boolean;
  keyboardType?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChangeText,
  icon1,
  icon2,
  icon3,
  placeholder,
  secureTextEntry,
  keyboardType,
  error = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);


  const clearText = () => {
    Keyboard.dismiss();
    if (onChangeText) {
      onChangeText('');  
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        mode="flat"
        keyboardType={keyboardType}
        label={
          <Text style={{ fontSize: 14, fontFamily: 'Montserrat-Medium', color: error ? 'red' : '#ABB3BA' }}>
            {label}
          </Text>
        }
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        right={
          value && icon2 && (
            <TextInput.Icon onPress={clearText} icon={() => <Image source={icon2} style={[styles.iconStyle, { tintColor: error ? 'red' : '' }]} />} />
          )
        }
        left={
          icon1 && (
            <TextInput.Icon icon={() => <Image source={icon1} style={[styles.iconStyle, { tintColor: error ? 'red' : '' }]} />} />
          )
        }
        textColor="white"
        placeholderTextColor="white"
        underlineColor="transparent"
        activeOutlineColor="transparent"
        underlineStyle={{
          display: 'none',
        }}
        theme={{
          colors: {
            primary: error && isFocused ? 'red' : 'grey',
          },
        }}
        style={[
          styles.input,
          { borderColor: error ? 'red' : '#348597', fontSize: 14, fontFamily: 'Montserrat-Medium' },
        ]}
        numberOfLines={1}
        placeholder={placeholder}
      />
    </View>
  );
};

export default CustomInput;

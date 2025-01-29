
import {  Text, TextStyle, TouchableOpacity } from 'react-native'
import React from 'react';
import { styles } from './style';

interface CustomButtonProps {
    text: string;
    style?: TextStyle;
    onPress: () => void;
    disable?: boolean;
}
const CustomButton: React.FC<CustomButtonProps> = ({ text, style, onPress, disable }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress} disabled={disable}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton


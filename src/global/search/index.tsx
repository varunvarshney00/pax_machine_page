import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { InputProps } from './@types';
import styles from './styles';
import { colors } from '../../utils/constants/colors';

const CustomInput: React.FC<
    InputProps & React.ComponentProps<typeof TextInput>
> = ({
    label,
    error,
    rightIcon,
    leftIcon,
    disabled,
    password,
    rightText,
    textTop,
    // required,
    containerStyle,
    textInputStyle,
    onFocus = () => { },
    ...props
}) => {
        const [isFocused, setIsFocused] = useState(false);
        const [hideEyeIcon, setHideEyeIcon] = useState(true);

        return (
            <View style={styles.inputMainContainer}>
                {label && (
                    <View style={styles.labelContainer}>
                        <Text >{label}</Text>
                        {rightText}
                    </View>
                )}

                <View
                    style={[
                        styles.inputContainer,
                        {
                            borderColor: error
                                ? colors.ERROR_COLOUR
                                : isFocused
                                    ? colors.PRIMARY
                                    : colors.LIGHT_BORDER,
                            borderWidth: isFocused ? 2 : 1,
                            backgroundColor: isFocused ? colors.TEXT_BACKGROUND : colors.TEXT_NO_FOCUS,
                        },
                        containerStyle,
                    ]}>

                    {leftIcon}

                    <TextInput
                        placeholderTextColor={colors.PLACEHOLDER_COLOUR}
                        style={[
                            styles.textInput,
                            {
                                ...textInputStyle,
                                textAlignVertical: textTop ? 'top' : 'center',
                                color: 'white',
                                fontFamily: 'Montserrat-Medium',
                                fontSize: 24,
                                lineHeight: 31.2
                            },
                        ]}
                        secureTextEntry={password ? hideEyeIcon : false}
                        autoCorrect={false}
                        onFocus={() => {
                            onFocus();
                            setIsFocused(true);
                        }}
                        maxLength={256}
                        editable={!disabled}
                        onBlur={() => {
                            setIsFocused(false);
                        }}
                        {...props}
                    />
                    {rightIcon}
                    {password && (
                        <TouchableOpacity onPress={() => setHideEyeIcon(!hideEyeIcon)}>
                            {/* <Image
                                source={Icons[hideEyeIcon ? 'hide' : 'show']}
                                style={styles.img}
                            /> */}
                        </TouchableOpacity>
                    )}
                </View>
                {error && (
                    <View style={styles.errorContainer}>
                        {/* <Image source={Icons.error} style={styles.img} /> */}
                        {/* <Text color={colors.ERROR_COLOUR}>{error}</Text> */}
                    </View>
                )}
            </View>
        );
    };

export default CustomInput;
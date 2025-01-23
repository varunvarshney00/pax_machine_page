export interface InputProps {
    label?: string;
    iconName?: string;
    title?: string;
    error?: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    rightText?: JSX.Element;
    disabled?: boolean;
    disabledBackground?: boolean;
    password?: boolean;
    textTop?: boolean;
    containerStyle?: TextStyle;
    required?: boolean;
    textInputStyle?: TextStyle;
    onFocus?: () => void;
  }
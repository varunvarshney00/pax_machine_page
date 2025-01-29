import React from 'react';
import { View, Text,  Image } from 'react-native';
import { styles } from './styles';

const CustomToast:React.FC = ({ msg, icon, visible }) => {
  if (!visible) return null; 

  return (
    <View style={styles.toastContainer}>
      <View style={styles.toastMessage}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={styles.message}>{msg}</Text>
      </View>
    </View>
  );
};
export default CustomToast;
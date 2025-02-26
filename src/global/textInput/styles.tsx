import { StyleSheet } from "react-native";
import {vh,vw} from '../../utils/scaling'

export const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',

    },

    input: {
      flex: 1,
      backgroundColor: '#01152B',
      borderRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderWidth: 1,
      
     
     
    },
    iconStyle: {
      width: vw(20),
      height: vh(20),
      resizeMode: 'contain',
      
  
    },
  });
  
 
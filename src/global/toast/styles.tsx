import { StyleSheet } from "react-native";
import {vh,vw} from '../../utils/scaling'

export const styles = StyleSheet.create({
    toastContainer: {
      position: 'absolute',
      zIndex: 1000,
      backgroundColor:'#CA392F',
      width:"100%",
      paddingVertical:vh(19),
      alignItems: 'center',
      justifyContent: 'center',
    },
    toastMessage: {
      flexDirection: 'row',
      gap:vw(6),
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    icon: {
      width: vw(22),
      height:vh(22),
    
    },
    message: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'Montserrat', 
    },
  });
  

  
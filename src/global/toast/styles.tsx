import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    toastContainer: {
      position: 'absolute',
      zIndex: 1000,
      backgroundColor:'#CA392F',
      width:"100%",
      paddingVertical:19,
      alignItems: 'center',
      justifyContent: 'center',
    },
    toastMessage: {
      flexDirection: 'row',
      gap:6,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    icon: {
      width: 22,
      height:22,
    
    },
    message: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'Montserrat', 
    },
  });
  

  
import { StyleSheet } from "react-native"
import {vh,vw} from '../../utils/scaling'
export const styles = StyleSheet.create({
   
    container:{
    paddingTop:vh(71.25),
    paddingLeft:vw(24),
    },
    logoContainer:{
    paddingBottom:vh(15),
    },
    logo: {
        width: vw(73),
        height: vh(50),
        resizeMode: 'contain',
        
     
    },
    text1: {
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 22,
       
    },
    text2: {
        fontFamily: 'Montserrat-Light',
        color: 'white',
        fontSize: 12,
    },
})
import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    body: {
        resizeMode:'contain',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    textContainer: {
        paddingLeft: 24,
        paddingTop:36,
        paddingBottom:4,
       
    },
    text1: {
        fontFamily: 'Montserrat-Bold',
        color: 'white',
        fontSize: 16,
        paddingBottom:4,
    },
    text2: {
        fontFamily: 'Montserrat-Light',
        color: 'white',
        fontSize: 12,
    },
    button: {
        marginTop: 36,
        marginLeft: 23,
        marginRight:25,
    },
    inputWrap:{
        paddingLeft:23,
        paddingRight:25,
         paddingTop:28,
     }
});
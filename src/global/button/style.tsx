import { StyleSheet } from "react-native";
import {vh,vw} from '../../utils/scaling'
export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B798E',
        paddingVertical: vh(18),
        borderRadius: 10,

    },
    text: {
        color: "black",
        fontFamily: 'Montserrat-Bold',
        fontSize: 13.5,
    }
})
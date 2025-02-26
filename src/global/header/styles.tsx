import { StyleSheet } from 'react-native';
import {vh,vw} from '../../utils/scaling'
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#102c41',
    },
    subContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: vw(20),
        marginVertical: vh(12),
    },
    title: {
        color: '#ffffff',
        fontFamily: 'Montserrat-Bold',
        marginBottom: vh(6),
        fontSize: 16,
    },
    subtitle: {
        color: '#ffffff',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    image: {
        height: vh(20),
        width: vw(20),
        resizeMode: 'contain',
    },
    arrow:{
        width:vw(13.33),
        height:vh(10)},
    main:{
        flexDirection:"row",
        gap:vw(11.87),
        justifyContent:'center',
        alignItems:'center'
    },

    arrowContainer:{
        backgroundColor:'#15374D',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:vh(9.23),
        paddingHorizontal:vw(7.57),
        borderColor:'#53C3DD80',
        borderWidth:1}
});

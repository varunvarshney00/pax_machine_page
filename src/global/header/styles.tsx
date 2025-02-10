import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#102c41',
    },
    subContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 12,
    },
    title: {
        color: '#ffffff',
        fontFamily: 'Montserrat-Bold',
        marginBottom: 6,
        fontSize: 16,
    },
    subtitle: {
        color: '#ffffff',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    image: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },
    arrow:{width:13.33,height:10},
    main:{
        flexDirection:"row",
        gap:11.87,
        justifyContent:'center',
        alignItems:'center'
    },

    arrowContainer:{
        backgroundColor:'#15374D',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:9.23,
        paddingHorizontal:7.57,
        borderColor:'#53C3DD80',
        borderWidth:1}
});

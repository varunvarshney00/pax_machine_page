import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#011217',
        flex: 1,
    },
    inputcolor: {
        backgroundColor: '#0e1f2c',
        borderColor: '#307184',
        marginLeft: 23.5,
        paddingHorizontal: 20,
        width: 580,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        paddingRight: 24.5,
        marginBottom: 32
    },
    filterIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginTop: 32,
    },
    searchIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
    },
    cardContainer:{
       marginBottom:12,
       
    },
    inputConatiner:{
        backgroundColor:"#102C41",
        marginHorizontal:22,
        borderRadius:12,
        paddingVertical:8,
        paddingHorizontal:10,
        marginTop:16,
       
    },
    inputValues:{
        marginTop:4
    },
    buttonWrap:{marginHorizontal:22,marginVertical:20,}
});

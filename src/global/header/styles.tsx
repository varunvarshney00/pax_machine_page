import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#102c41',
    },
    subContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginVertical: 24,
    },
    title: {
        color: '#ffffff',
        fontFamily: 'Montserrat-Bold',
        marginBottom: 6,
        fontSize: 32,
    },
    subtitle: {
        color: '#ffffff',
        fontFamily: 'Montserrat-Regular',
        fontSize: 24,
    },
    image: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
    },
});

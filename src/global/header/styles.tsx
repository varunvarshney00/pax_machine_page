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
});

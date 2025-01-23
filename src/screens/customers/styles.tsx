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
        width: 76,
        height: 76,
        resizeMode: 'contain',
        marginTop: 32,
    },
    searchIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
    },
});

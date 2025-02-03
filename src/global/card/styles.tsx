import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#0e1f2c',
        marginHorizontal: 24.5,
        borderRadius: 14.18,
        padding: 10,
        borderColor: '#307184',
        borderWidth: 1,
       
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7.62,
    },
    avatar: {
        width: 14,
        height: 14,
    },
    nameText: {
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    infoContainer: {
        backgroundColor: '#102c41',
        borderRadius: 12,
        marginTop: 20,

    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoLabel: {
        color: '#aBB3BA',
        fontSize: 11,
        fontFamily: 'Montserrat-Regular',
        lineHeight: 14.3,
    },
    infoValue: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'Montserrat-Regular',
        lineHeight: 14.3,
    },
    infoSectionLeft: {
        padding: 10,
        // width: 85.71,
        gap: 5,
    },
    infoSectionCenter: {
        padding: 10,
        alignItems: 'center',

        // width: 85.71,
        gap: 5,

    },
    infoSectionRight: {
        // padding: 10,
        alignItems: 'center',
        justifyContent:'center',
        // width: 77.14,
        gap: 5,
    },
    verticalDivider: {
        borderWidth: 1,
        height: 52,
        borderColor: '#1f4c63',
    },
    horizontalDivider: {
        borderWidth: 1,
        borderColor: '#1f4c63',
        width: 400,
        alignSelf: 'center',
    },
});

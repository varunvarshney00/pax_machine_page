import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#0e1f2c',
        marginHorizontal: 24.5,
        borderRadius: 14.18,
        padding: 20,
        borderColor: '#307184',
        borderWidth: 1,
        marginBottom: 28
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    avatar: {
        width: 58,
        height: 58,
    },
    nameText: {
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 28,
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
        fontSize: 20,
        fontFamily: 'Montserrat-Regular',
        lineHeight: 26,
    },
    infoValue: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat-Regular',
        lineHeight: 26,
    },
    infoSectionLeft: {
        padding: 16,
        width: 180,
        gap: 10,
    },
    infoSectionCenter: {
        padding: 16,
        alignItems: 'center',
        width: 180,
        gap: 10,

    },
    infoSectionRight: {
        padding: 16,
        alignItems: 'flex-end',
        width: 174,
        gap: 10,
    },
    verticalDivider: {
        borderWidth: 1,
        height: 52,
        borderColor: '#1f4c63',
    },
    horizontalDivider: {
        borderWidth: 1,
        borderColor: '#1f4c63',
        width: 600,
        alignSelf: 'center',
    },
});

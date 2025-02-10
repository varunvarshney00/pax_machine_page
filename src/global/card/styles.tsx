import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#0e1f2c',
        marginLeft: 19,
        marginRight: 21,
        borderRadius: 10,
        padding: 10,
        borderColor: '#307184',
        borderWidth: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7.62,
        justifyContent: 'space-between',
    },
    avatarConatiner: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 28,
        height: 28,
    },
    nameText: {
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        lineHeight: 19.6
    },
    infoContainer: {
        backgroundColor: '#102c41',
        borderRadius: 6,
        marginTop: 12,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
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
        fontFamily: 'Montserrat-Medium',
        lineHeight: 14.3,
    },
    infoSectionLeft: {
        paddingVertical: 10,
        width: 85.71,
        justifyContent: 'flex-start',
        gap: 5,

    },
    infoSectionCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 85.71,
        gap: 5,

    },
    infoSectionRight: {
        justifyContent: 'flex-end',
        width: 77.14,
        gap: 5,
    },
    verticalDivider: {
        borderWidth: .48,
        height: 24.76,
        borderColor: '#1f4c63',
    },
    horizontalDivider: {
        borderWidth: .36,
        borderColor: '#1f4c63',
        width: 280,
        alignSelf: 'center',
    },
    detailIcon: {
        width: 1.52,
        height: 12.13
    },
    detailContainer: {
        paddingHorizontal: 13.24,
        paddingVertical: 7.93,
        backgroundColor: "#142C3A",
        borderWidth: 1,
        borderColor: "#53C3DD80",
        borderRadius: 5.38,

    },
    nameContainer: {
        flexDirection: 'row',
        gap: 7.62,
        justifyContent: 'center',
        alignItems: "center"

    }
});

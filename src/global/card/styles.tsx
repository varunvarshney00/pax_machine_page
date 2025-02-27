import { StyleSheet } from 'react-native';
import {vh,vw} from '../../utils/scaling'

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#0e1f2c',
        marginLeft: vw(19),
        marginRight: vw(21),
        borderRadius: 10,
        padding: vw(10),
        borderColor: '#307184',
        borderWidth: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw(7.62),
        justifyContent: 'space-between',
    },
    avatarConatiner: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: vw(28),
        height: vw(28),
    },
    nameText: {
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        lineHeight: vh(19.6)
    },
    infoContainer: {
        backgroundColor: '#102c41',
        borderRadius: 6,
        marginTop: vh(12),
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: vw(10)
    },
    infoLabel: {
        color: '#aBB3BA',
        fontSize: 11,
        fontFamily: 'Montserrat-Regular',
        lineHeight: vh(14.3),
    },
    infoValue: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'Montserrat-Medium',
        lineHeight: vh(14.3),
    },
    infoSectionLeft: {
        paddingVertical: vh(10),
        width: vw(85.71),
        justifyContent: 'flex-start',
        gap: vw(5),

    },
    infoSectionCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        width: vw(85.71),
        gap: vw(5),

    },
    infoSectionRight: {
        justifyContent: 'flex-end',
        width: vw(77.14),
        gap: vw(5),
    },
    verticalDivider: {
        borderWidth: .48,
        height: vh(24.76),
        borderColor: '#1f4c63',
    },
    horizontalDivider: {
        borderWidth: .36,
        borderColor: '#1f4c63',
        width: vw(280),
        alignSelf: 'center',
    },
    detailIcon: {
        width: 1.52,
        height: vh(12.13)
    },
    detailContainer: {
        paddingHorizontal: vw(13.24),
        paddingVertical:vh( 7.93),
        backgroundColor: "#142C3A",
        borderWidth: 1,
        borderColor: "#53C3DD80",
        borderRadius: 5.38,

    },
    nameContainer: {
        flexDirection: 'row',
        gap: vw(7.62),
        justifyContent: 'center',
        alignItems: "center"

    }
});

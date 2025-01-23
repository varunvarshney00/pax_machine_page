import { StyleSheet } from 'react-native';
import { colors } from '../../utils/constants/colors';


const styles = StyleSheet.create({
    inputMainContainer: {
        // marginVertical: 8,
    },
    errorContainer: {
        alignItems: 'center',
        marginBottom: 3,
        gap: 5,
        flexDirection: 'row',
    },
    errorText: {
        color: colors.ERROR_COLOUR,
        fontSize: 11,
    },
    label: {
        fontSize: 11,
    },
    labelContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 2,
        flexDirection: 'row',
        marginLeft: 4,

    },
    inputContainer: {
        alignItems: 'center',
        marginTop: 32,
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        height: 76,
    },
    img: {
        width: 20,
        height: 20,
    },
    textInput: {
        fontSize: 13,
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white'
    },
    password: {
        textAlignVertical: 'center',
        opacity: 0.8,
    },
});

export default styles;

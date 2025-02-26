import { StyleSheet } from 'react-native';
import { colors } from '../../utils/constants/colors';
import {vh,vw} from '../../utils/scaling'

const styles = StyleSheet.create({
    inputMainContainer: {
        // marginVertical: 8,
    },
    errorContainer: {
        alignItems: 'center',
        marginBottom: vh(3),
        gap: vw(5),
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
        marginBottom: vh(2),
        flexDirection: 'row',
        marginLeft: vw(4),

    },
    inputContainer: {
        alignItems: 'center',
        marginTop: vh(32),
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingHorizontal: vw(20),
        flexDirection: 'row',
        height: vh(76),
    },
    img: {
        width: vw(20),
        height: vh(20),
    },
    textInput: {
        fontSize: 13,
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: vw(12),
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

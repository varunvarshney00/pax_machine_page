import { Image,   Text ,View} from 'react-native'
import React from 'react'

import { Icons } from '../../assets'
import { styles } from './style'

const CustomHeader: React.FC = () => {
    return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                <Image source={Icons.logo} style={styles.logo} />
                </View>
            <Text style={styles.text1}>QUIVIO</Text>
            <Text style={styles.text2}>Complete Business Management</Text>
            </View>
    )
}

export default CustomHeader
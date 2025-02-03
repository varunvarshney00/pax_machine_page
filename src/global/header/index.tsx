import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Icons} from '../../assets';

type headerProps = {
    title: string;
    subtitle: string;
}

const Header: React.FC<headerProps> = ({ title, subtitle }) => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>

                <TouchableOpacity style={{backgroundColor:'#53C3DD',borderRadius:5,padding:10}}>
                    <Image source={Icons.Add} style={styles.image} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;

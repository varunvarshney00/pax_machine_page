import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icons, Images } from '../../assets';
import { styles } from './styles';

type CardProps = {
  Name: string;
  LicensePlate: string;
  LoyalityPoints: number;
  CustomerNo: string;
  PhoneNo: string;
  LoyalityNumber: number;
  LastVisit:string;
};

const Card: React.FC<CardProps> = ({ Name, LicensePlate, LastVisit,CustomerNo, PhoneNo, LoyalityNumber,LoyalityPoints }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.nameContainer}>
          <View style={styles. avatarConatiner}>

        <Image source={Images.Avatar} style={styles.avatar} />
          </View>
        <Text style={styles.nameText}>{Name}</Text>
        </View>
        <TouchableOpacity style={styles.detailContainer}>
          <Image source={Icons.Detail} style={styles.detailIcon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>

        <View style={styles.infoRow}>

          <View style={styles.infoSectionLeft}>
            <Text style={styles.infoLabel}>License Plate</Text>
            <Text style={styles.infoValue}>{LicensePlate}</Text>
          </View>
          <View style={styles.verticalDivider} />

          <View style={styles.infoSectionCenter}>
            <Text style={styles.infoLabel}>Last Visit</Text>
            <Text style={styles.infoValue}>{LastVisit}</Text>
          </View>
          <View style={styles.verticalDivider} />

          <View style={styles.infoSectionRight}>
            <Text style={[styles.infoLabel, {textAlign:'right'}]}>Customer No</Text>
            <Text style={[styles.infoValue,{textAlign:'right'}]}>{CustomerNo}</Text>
          </View>

        </View>

        <View style={styles.horizontalDivider} />

        <View style={styles.infoRow}>

          <View style={styles.infoSectionLeft}>
            <Text style={styles.infoLabel}>Phone No</Text>
            <Text style={styles.infoValue}>{PhoneNo}</Text>
          </View>

          <View style={styles.verticalDivider} />

          <View style={styles.infoSectionCenter}>
            <Text style={[styles.infoLabel, {textAlign:'center',width:100}]}>Loyality Number</Text>
            <Text style={styles.infoValue}>{LoyalityNumber}</Text>
          </View>

          <View style={styles.verticalDivider} />

          <View style={styles.infoSectionRight}>
            <Text style={[[styles.infoLabel, {width:100}]]}>Loyality Points</Text>
            <Text style={[styles.infoValue, {textAlign:'right'}]}>{LoyalityPoints}</Text>
          </View>

        </View>

      </View>
    </View >
  );
};

export default Card;

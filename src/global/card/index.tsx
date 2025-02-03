import { View, Text, Image } from 'react-native';
import React from 'react';
import { Images } from '../../assets';
import { styles } from './styles';

type CardProps = {
  Name: string;
  ID: number;
  LoyaltyPoints: number;
  LoyaltyNo: number;
  Membership: string;
  Vehicle: string;
  LastVisit: string;
};

const Card: React.FC<CardProps> = ({ Name, ID, LoyaltyPoints, LoyaltyNo, Membership, Vehicle, LastVisit }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Image source={Images.Avatar} style={styles.avatar} />
        <Text style={styles.nameText}>{Name}</Text>
      </View>

      <View style={styles.infoContainer}>

        <View style={styles.infoRow}>

          <View style={styles.infoSectionLeft}>
            <Text style={styles.infoLabel}>License Plate</Text>
            <Text style={styles.infoValue}>{ID}</Text>
          </View>
          <View style={styles.verticalDivider} />

          <View style={styles.infoSectionCenter}>
            <Text style={styles.infoLabel}>Loyalty Points</Text>
            <Text style={styles.infoValue}>{LoyaltyPoints}</Text>
          </View>
          <View style={styles.verticalDivider} />

          <View style={styles.infoSectionRight}>
            <Text style={styles.infoLabel}>Loyalty No</Text>
            <Text style={styles.infoValue}>{LoyaltyNo}</Text>
          </View>

        </View>

        <View style={styles.horizontalDivider} />

        <View style={styles.infoRow}>

          <View style={styles.infoSectionLeft}>
            <Text style={styles.infoLabel}>Membership</Text>
            <Text style={styles.infoValue}>{Membership}</Text>
          </View>

          <View style={styles.verticalDivider} />

          <View style={styles.infoSectionCenter}>
            <Text style={styles.infoLabel}>Vehicle</Text>
            <Text style={styles.infoValue}>{Vehicle}</Text>
          </View>
          <View style={styles.verticalDivider} />

          <View style={styles.infoSectionRight}>
            <Text style={styles.infoLabel}>Last Visit</Text>
            <Text style={styles.infoValue}>{LastVisit}</Text>
          </View>

        </View>

      </View>
    </View >
  );
};

export default Card;

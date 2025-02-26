import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icons, Images } from '../../assets'
import {vh,vw} from '../../utils/scaling'

const HomeHeader = () => {
   return (
       <SafeAreaView>
           <View style={styles.container}>
               <View style={styles.leftheader}>
                   <Image source={Images.Avatar} style={styles.avatar} />
                   <Image source={Images.quivioImage} style={styles.quivioImage} />
               </View>


               <Image source={Icons.Scan} style={styles.scan} />


           </View>
       </SafeAreaView>
   )
}


export default HomeHeader


const styles = StyleSheet.create({
   container: {
       width: '100%',
       height: vh(60),
       backgroundColor: '#102c41',
       flexDirection: 'row',
       alignItems: 'center',
       paddingVertical: vh(12),
       paddingHorizontal: vw(20),
       justifyContent: 'space-between'
   },
   avatar: {
       height: vh(24),
       width: vw(24),
       resizeMode: 'contain'
   },
   quivioImage: {
       width: vw(57.17),
       height: vh(20.13),
       resizeMode: 'contain',
       marginLeft: vw(11)
   },
   leftheader: {
       flexDirection: 'row',
       alignItems: 'center'
   },
   scan: {
       width: vw(36),
       height: vh(36),
       resizeMode: 'contain',
   }
})




import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icons, Images } from '../../assets'


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
       height: 60,
       backgroundColor: '#102c41',
       flexDirection: 'row',
       alignItems: 'center',
       paddingVertical: 12,
       paddingHorizontal: 20,
       justifyContent: 'space-between'
   },
   avatar: {
       height: 24,
       width: 24,
       resizeMode: 'contain'
   },
   quivioImage: {
       width: 57.17,
       height: 20.13,
       resizeMode: 'contain',
       marginLeft: 11
   },
   leftheader: {
       flexDirection: 'row',
       alignItems: 'center'
   },
   scan: {
       width: 36,
       height: 36,
       resizeMode: 'contain',
   }
})




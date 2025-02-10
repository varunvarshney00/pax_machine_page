import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SelectCustomer from '../../global/selectCustomer'
import PosCategoriesAndItems from '../../global/posCategoriesAndItems'
import Sale from '../../global/sale'
import HomeHeader from '../../global/homeHeader'


const Main = () => {
   return (
       <View style={styles.container}>
           <HomeHeader />
           <SelectCustomer />
           <PosCategoriesAndItems />
           <Sale />
       </View>
   )
}


const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#011217'
   }
})


export default Main


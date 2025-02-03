import { Text, View } from 'react-native'
import React from 'react'
import Header from '../../global/header'
import SelectCustomer from '../../global/selectCustomer'
import PosCategoriesAndItems from '../../global/posCategoriesAndItems'
import Sale from '../../global/sale'

const Main = () => {
    return (
        <View>
            <SelectCustomer />
            <PosCategoriesAndItems />
            <Sale />
        </View>
    )
}

export default Main
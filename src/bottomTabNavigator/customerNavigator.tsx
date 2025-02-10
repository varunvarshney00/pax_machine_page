import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Listing from "../screens/listing";
import Customers from "../screens/customers";

const Customer = createNativeStackNavigator();


const CustomNavigator = () => {
  return (
    <Customer.Navigator>
        <Customer.Screen
        name="Customer"
        component={Customers}
        options={{ headerShown: false }}
        />
      <Customer.Screen
        name={'Listing'}
        component={Listing}
        options={{ headerShown: false }}
      />
     
    </Customer.Navigator>
  )
}

export default CustomNavigator;
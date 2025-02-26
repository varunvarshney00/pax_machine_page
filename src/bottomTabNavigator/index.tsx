/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/main';
import Transactions from '../screens/transactions';
import Vehicles from '../screens/vehicles';
import More from '../screens/more';
import { Images } from '../assets';
import { Image } from 'react-native';
import {vh,vw} from '../utils/scaling'
import CustomNavigator from './customerNavigator';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#102c41',
                height: vh(70),
                width: vw(360)

            },
            tabBarLabelPosition: 'below-icon',
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {
                fontSize: vw(12),
                fontFamily: 'Montserrat-Bold',
                lineHeight: vh(20),
                marginTop: vh(4),
                marginBottom: vh(15),
                width: route.name === 'Main' && 'More' ? vw(31) : vw(77), 
                textAlign: 'center',
            },
            tabBarItemStyle: {
                // borderWidth: 1,
                // borderColor: "red",
                // backgroundColor:'green',

            },
            tabBarIconStyle: {
                marginTop: vh(15)
            },
     
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ focused }) => {
                let iconSource;
                switch (route.name) {
                    case 'Main':
                        iconSource = Images.Home
                        break;

                    case 'Transactions':
                        iconSource = Images.Transactions
                        break;

                    case 'Customers':
                        iconSource = Images.Customers
                        break;


                    case 'Vehicles':
                        iconSource = Images.Vehicles
                        break;

                    case 'More':
                        iconSource = Images.More;
                        break;
                    default:
                        break;
                }

                return (

                    <Image
                        source={iconSource}
                        style={{
                            width: vw(16),
                            height: vh(16),
                            resizeMode: 'contain',
                            tintColor: focused ? '#53c3dd' : 'white'
                        }}
                    />
                );
            },
            tabBarActiveTintColor: '#53c3dd',
            tabBarInactiveTintColor: 'white',

        })}>
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Transactions" component={Transactions} />
            <Tab.Screen name="Customers" component={CustomNavigator} />
            <Tab.Screen name="Vehicles" component={Vehicles} />
            <Tab.Screen name="More" component={More} />

        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
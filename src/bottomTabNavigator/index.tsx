import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Customers from '../screens/customers';
import Main from '../screens/main';
import Transactions from '../screens/transactions';
import Vehicles from '../screens/vehicles';
import More from '../screens/more';
import { Images } from '../assets';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#102c41',
                height: 101,
                borderTopWidth: 0,
            },
            tabBarLabelStyle: {
                fontSize: 20,
                fontFamily: 'Montserrat-Regular',
                // color: 'red',
                lineHeight: 26.35,
                marginTop: 14,
            },
            tabBarIconStyle: {
                marginTop: 14
            },

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
                        iconSource = Images.More
                        break;
                    default:
                        break;
                }

                return (
                    <Image
                        source={iconSource}
                        style={{
                            width: 32,
                            height: 32,
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
            <Tab.Screen name="Customers" component={Customers} />
            <Tab.Screen name="Vehicles" component={Vehicles} />
            <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
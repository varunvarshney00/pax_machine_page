
import React from 'react';

//Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screens
import BottomTabNavigator from './bottomTabNavigator';
import Login from './screens/login';
import { Dimensions } from 'react-native';
import SplashScreen from './screens/splashScreen';
import StartShift from './screens/startShift';
import OpenCash from './screens/openCash';

export type RootStackParamList = {
  BottomTabNavigator: undefined;
  LoginScreen: undefined;
  // Details: { productId: string }
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {

  // console.log(Dimensions.get('window').height, '[[[[[[');
  // console.log(Dimensions.get('window').width);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomTabNavigator'>


        <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{ headerShown: false }} name="StartShift" component={StartShift} />
        <Stack.Screen options={{ headerShown: false }} name="OpenCash" component={OpenCash} />
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={Login} />
        <Stack.Screen
          name='BottomTabNavigator'
          component={BottomTabNavigator}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;

import React from 'react';

//Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screens
import BottomTabNavigator from './bottomTabNavigator';
import Login from './screens/login';

export type RootStackParamList = {
  BottomTabNavigator: undefined;
  LoginScreen: undefined;
  // Details: { productId: string }
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>

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

import React from 'react';

//Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screens
import BottomTabNavigator from './bottomTabNavigator';

export type RootStackParamList = {
  BottomTabNavigator: undefined;
  // Details: { productId: string }
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomTabNavigator'>
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
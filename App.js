
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>   
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerTitle: 'Home',
          }}
        />
         <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{
            title: 'Second',
            headerTitle: 'Second',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}  
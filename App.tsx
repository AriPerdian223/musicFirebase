import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddMusic from './src/screens/AddMusic';
import EditMusic from './src/screens/EditMusic';
import DetailMusic from './src/screens/DetailMusic';
import StartScreen from './src/screens/StartScreen';
import LoginScreen from './src/screens/LoginScreen'; // Tambahkan LoginScreen
import {setupDatabase} from './src/api/setupDatabase'; // Impor setupDatabase

const Stack = createStackNavigator();

export default function App() {
  // Panggil setupDatabase di dalam useEffect
  useEffect(() => {
    setupDatabase();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen} // Tambahkan route untuk LoginScreen
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddMusic"
          component={AddMusic}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditMusic"
          component={EditMusic}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailMusic"
          component={DetailMusic}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

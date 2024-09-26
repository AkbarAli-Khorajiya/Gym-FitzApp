import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InitialPage from './src/screens/onBoarding/InitialPage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SecondPage from './src/screens/onBoarding/SecondScreen';
import ThirdScreen from './src/screens/onBoarding/ThirdScreen';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import Verification from './src/screens/auth/Verification';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='initialScreen'>
        <Stack.Screen name='initialScreen' component={InitialPage} screenOptions={{ headerShown: false }} />
        <Stack.Screen name='SecondScreen' component={SecondPage} screenOptions={{ headerShown: false }} />
        <Stack.Screen name='ThirdScreen' component={ThirdScreen} screenOptions={{ headerShown: false }} />
        <Stack.Screen name='SignIn' component={SignIn} screenOptions={{ headerShown: true }} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Verification' component={Verification} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
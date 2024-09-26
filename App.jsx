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
import Gender from './src/screens/collectData/Gender';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='initialScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='initialScreen' component={InitialPage} />
        <Stack.Screen name='SecondScreen' component={SecondPage} />
        <Stack.Screen name='ThirdScreen' component={ThirdScreen} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Verification' component={Verification} />
        <Stack.Screen name='Gender' component={Gender} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
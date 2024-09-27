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
import Goal from './src/screens/collectData/Goal';
import SelectHeight from './src/screens/collectData/SelectHeight';
import SelectWeight from './src/screens/collectData/SelectWeight';
import SelectGoalWeight from './src/screens/collectData/SelectGoalWeight';
import SelectLevel from './src/screens/collectData/SelectLevel';
import SelectActivities from './src/screens/collectData/SelectActivities';
import Graph from './src/screens/collectData/Graph';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Graph' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='initialScreen' component={InitialPage} />
        <Stack.Screen name='SecondScreen' component={SecondPage} />
        <Stack.Screen name='ThirdScreen' component={ThirdScreen} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Verification' component={Verification} />
        <Stack.Screen name='Gender' component={Gender} />
        <Stack.Screen name='Goal' component={Goal} />
        <Stack.Screen name='SelectHeight' component={SelectHeight} />
        <Stack.Screen name='SelectWeight' component={SelectWeight} />
        <Stack.Screen name='SelectGoalWeight' component={SelectGoalWeight} />
        <Stack.Screen name='SelectLevel' component={SelectLevel} />
        <Stack.Screen name='SelectActivities' component={SelectActivities} />
        <Stack.Screen name='Graph' component={Graph} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
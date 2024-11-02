import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calculator from './src/screens/Calculator'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUpform from './src/screens/SignUpform'
import LoginForm from './src/screens/Loginform'


const Stack = createNativeStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator  initialRouteName='Loginform'>
      <Stack.Screen name='SignUp' component={SignUpform} options={{ title: 'LogIn ', headerShown:false }}/>
      <Stack.Screen name='Loginform' component={LoginForm}  options={{ title: 'LogIn ', headerShown:false }}/>
    </Stack.Navigator>
   </NavigationContainer>

  )
}
export default App;


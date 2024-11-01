import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calculator from './Content/forms/Calculator'
import Loginform from './Content/forms/Loginform'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUpform from './Content/forms/SignUpform'


const Stack = createNativeStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator  initialRouteName='Loginform'>
      <Stack.Screen name='SignUp' component={SignUpform} options={{ title: 'LogIn ', headerShown:false }}/>
      <Stack.Screen name='Loginform' component={Loginform}  options={{ title: 'LogIn ', headerShown:false }}/>
    </Stack.Navigator>
   </NavigationContainer>

  )
}
export default App;


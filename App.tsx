import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calculator from './src/mamhaleema/Calculator'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginForm from './src/screens/Loginform'
import Home from './src/screens/Home'
import { RadioButton } from 'react-native-paper'
import Radiobutton from './src/Sirnoman/Radiobutton'
import SignUpform from './src/screens/SignUpform'
import Login from './src/mamhaleema/Employee'

const Stack=createNativeStackNavigator();
const App = () => {

  return (
    
//  <NavigationContainer>
//   <Stack.Navigator initialRouteName='Login'>
//     <Stack.Screen name='Login' component={LoginForm}/>
//     <Stack.Screen name='Signup' component={SignUpform}/>
//     <Stack.Screen name='Home' component={Home}/>
//   </Stack.Navigator>
//  </NavigationContainer>
<Login/>

  )
}
export default App;


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calculator from './Content/forms/Calculator'
import Loginform from './Content/forms/Loginform'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();
const App = () => {
  return (
  <Loginform/>
  )
}
export default App;


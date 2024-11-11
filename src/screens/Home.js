import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({route}) => {
  const {Data}=route.params;
  return (
    <View style={styles.main}>
      
      <Text>ID: {Data.id}</Text>
            <Text>Name: {Data.name}</Text>
            <Text>Email: {Data.email}</Text>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({main:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
}})
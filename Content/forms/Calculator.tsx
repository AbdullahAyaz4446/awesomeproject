import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import { useState } from 'react';
import React from 'react'

const Calculator = () => {
    const [count, setCount] = useState(''); 
    const handlePress = (value) => {
      setCount((p) => p + value);
    };
    const calculateResult = () => {
      try {
        const result = eval(count); 
        setCount(result.toString()); 
      } catch (error) {
        setCount('Error'); 
      }
    };
  
    const showButton = (title, onPress) => (
      <TouchableOpacity onPress={onPress} style={styles.buttonstyle}>
        <Text style={styles.buttontext}>{title}</Text>
        
      </TouchableOpacity>
    );
  return (
    <View style={styles.mainContainer}>
      
    <Text style={styles.title}>Calculator</Text>
    <TextInput placeholder="0" editable={false} value={count} style={styles.input} />
    <View style={styles.buttonContainer}>
      {['7', '8', '9', '+'].map((val) => showButton(val, () => handlePress(val)))}
    </View>
    <View style={styles.buttonContainer}>
      {['4', '5', '6', '-'].map((val) => showButton(val, () => handlePress(val)))}
    </View>
    <View style={styles.buttonContainer}>
      {['1', '2', '3', '*'].map((val) => showButton(val, () => handlePress(val)))}
    </View>
    <View style={styles.buttonContainer}>
      {showButton('C', () => setCount(''))}
      {showButton('0', () => handlePress('0'))}
      {showButton('=', calculateResult)}
      {showButton('/', () => handlePress('/'))}
    </View>
  </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
     
    },
    input: {
      borderRadius: 20,
      borderColor: 'black',
      borderWidth: 3,
      width: '90%',
      textAlign: 'right',
      fontSize: 18,
      marginBottom: 30,
      fontWeight:'bold',
      padding:8
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '90%',
      marginBottom: 15,
      borderColor: 'black',
      borderWidth: 3,
      borderRadius: 30,
      padding:10
  
    },
    buttonstyle:{
      width:60,
      height:60,
      borderRadius:30,
      backgroundColor: 'black',
      alignItems:'center',
      justifyContent:'center'
  
  
    },
    buttontext:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
      color:'white'
    }
  });
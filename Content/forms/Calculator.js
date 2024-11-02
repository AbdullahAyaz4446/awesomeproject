import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react';
import React from 'react'
import styles from '../Style/calstyles';

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
                {['4', '5', '6', '-'].map((val) => (showButton(val, () => handlePress(val))))}
            </View>
            <View style={styles.buttonContainer}>
                {['1', '2', '3', '*'].map((val) => showButton(val, () => handlePress(val)))}
            </View>
            <View style={styles.buttonContainer}>
                {showButton('AC', () => setCount(''))}
                {showButton('0', () => handlePress('0'))}
                {showButton('=', calculateResult)}
                {showButton('/', () => handlePress('/'))}
            </View>
        </View>
    )
}

export default Calculator;
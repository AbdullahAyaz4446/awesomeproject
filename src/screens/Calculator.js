import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import React from 'react';

const Calculator = () => {
    const [count, setCount] = useState('');

    const showButton = (t, onp) => {
        return (
            <TouchableOpacity onPress={onp} style={styles.buttonstyle}>
                <Text style={styles.buttontext}>{t}</Text>
            </TouchableOpacity>
        );
    };

    const handlePress = (value) => {
        setCount((prev) => prev + value);
    };

    const calculateResult = () => {
        try {
            const result = eval(count);
            setCount(result.toString());
        } catch (error) {
            setCount('Error');
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Calculator</Text>
            <TextInput
                placeholder="0"
                value={count}
                editable={false}
                style={styles.input}
            />
            <View style={styles.row}>
                {['7', '8', '9', '+'].map((val) => showButton(val, () => handlePress(val)))}
            </View>
            <View style={styles.row}>
                {['4', '5', '6', '-'].map((val) => showButton(val, () => handlePress(val)))}
            </View>
            <View style={styles.row}>
                {['1', '2', '3', '*'].map((val) => showButton(val, () => handlePress(val)))}
            </View>
            <View style={styles.row}>
                {showButton('AC', () => setCount(''))}
                {showButton('0', () => handlePress('0'))}
                {showButton('=', () => calculateResult())}
                {showButton('/', () => handlePress('/'))}
            </View>
        </View>
    );
};

export default Calculator;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 5,
        width: '100%',
        borderRadius: 25,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 15,
        marginBottom: 20,
        fontSize:20
    },
    buttontext: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
    },
    buttonstyle: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 70,
        margin: 10,
        width:70,
        height:70,
        backgroundColor:'pink'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});

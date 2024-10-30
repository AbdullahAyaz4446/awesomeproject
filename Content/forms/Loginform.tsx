import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const LoginForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [show, setshow] = useState(""); 

    const data = [
        { name: 'abdullah', password: '1234' },
        { name: 'wajahat', password: '12345' },
    ];

    const datacompresion = () => {
        // { its mean find is  a call back function arrow they must recevive a arry to find data}
        const user = data.find(user => user.name === name && user.password === password);
        if (user) {
            setshow("correct");
            setName("")
            setPassword("")
        } else {
            setshow("Invalid name or password"); 
        }
        // user ? setshow(""):setshow("Invalid name and Password")
    };

    return (
        <View style={styles.main}>
            <Text style={styles.text}>LogIn Form</Text>
            
            <View style={{ width: "90%" }}>
                <TextInput 
                    placeholder="Enter name" 
                    value={name} 
                    onChangeText={setName} 
                    style={styles.input} 
                />
            </View>
            
            <View style={{ width: "90%" }}>
                <TextInput 
                    placeholder="Enter password" 
                    value={password} 
                    onChangeText={setPassword} 
                    secureTextEntry 
                    style={styles.input} 
                />
            </View>

           {/* its mean the  show not be empty mean condition must be true  the have a data */}
            {show ? <Text style={styles.errorText}>{show}</Text> : null}   
           
            <View style={{ width: "90%" }}> 
                <TouchableOpacity onPress={datacompresion} style={styles.buttonstyle}>
                    <Text style={styles.buttontext}>LogIn</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        padding: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 4,
        width: '100%',
        fontSize: 20,
        marginBottom: 30,
        fontWeight: 'bold',
        padding: 10,
    },
    buttonstyle: {
        width: "100%",
        height: 70,
        borderRadius: 35,
        backgroundColor: '#E7E9E8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontext: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    errorText: {
        color: 'red', // Style for error message
        fontSize: 16,
        marginBottom: 20,
    },
});

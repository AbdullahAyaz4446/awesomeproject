import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const LoginForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); 
    const [color, setColor] = useState("");

    const data = [
        { name: 'abdullah', password: '4446' },
        { name: 'wajahat', password: '12345' },
        { name: 'Mughees', password: '0001' },
        { name: 'Tuheed', password: '1111' },
        { name: 'Faiz ayaz', password: '9999' }
    ];

    const handleLogin = () => {
        const user = data.find(user => user.name.toLowerCase() === name.toLowerCase() && user.password === password);
        if(!name||!password){
            setName("");
            setPassword("");
            setColor("red");
            setMessage("enter Username and Password");
        }
        else if (user) {
            setName("");
            setPassword("");
            setColor("green");
            setMessage("Login Successful");
        } else {
            setColor("red");
            setMessage("Invalid name or password");
        }
    };

    return (
        <View style={styles.main}>
            <Text style={styles.text}>Login Form</Text>
            
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Enter name" 
                    value={name} 
                    onChangeText={setName} 
                    style={styles.input} 
                />
            </View>
            
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Enter password" 
                    value={password} 
                    onChangeText={setPassword} 
                    secureTextEntry 
                    style={styles.input} 
                />
                <Text style={{color: color, textAlign: 'center'}}>{message}</Text>
            </View>

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
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
    inputContainer: {
        width: "90%",
        marginBottom: 15,
    },
    input: {
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        fontSize: 18,
        padding: 10,
        fontWeight: 'bold',
    },
    button: {
        width: "90%",
        height: 70,
        borderRadius: 25,
        backgroundColor: '#E7E9E8',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

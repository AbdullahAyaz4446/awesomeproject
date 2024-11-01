import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const LoginForm = () => {
    const navigation=useNavigation();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); 
    const [color, setColor] = useState("");

    const data = [
        { name: 'abdullah', password: '4446' },
        { name: 'Wajahat', password: '12345' },
        { name: 'Mughees', password: '0001' },
        { name: 'Tuheed', password: '1111' },
        { name: 'Faiz ayaz', password: '9999' },

        { name: 'ahsan', password: '991' }
    ];

    const handleLogin = () => {
        const user = data.find(user => user.name.toLowerCase() === name.toLowerCase() && user.password === password);
        if(!name||!password){
            setName("");
            setPassword("");
           setColor('red')
            setMessage("Enter username and password");
        }
        else if (user) {
            setName("");
            setPassword("");
           setColor('green')
          setMessage("Login Successfully");
          navigation.navigate('SignUp');

        } else {
           setColor('red')
            setMessage("Invalid username or password");
        }
    };

    return (
        <View style={styles.main}>
            <Image source={require('/Users/macbookpro/awesomeproject/Content/images/laptop-2298286_1920.png')} style={styles.logo}/>

            <Text style={styles.text}>Login 🔐</Text>
            
            <View style={styles.inputContainer}>
            <Text style={{textAlign:'left'}}>Enter Username</Text>
                <TextInput 
                    placeholder="Username" 
                    value={name} 
                    onChangeText={setName} 
                    style={styles.input} 
                />
            </View>
            
            <View style={styles.inputContainer}>
            <Text style={{textAlign:'left'}}>Enter Password</Text>
                <TextInput 
                    placeholder="Password" 
                    value={password} 
                    onChangeText={setPassword} 
                    secureTextEntry 
                    style={styles.input} 
                />
                <Text style={{color:color, textAlign: 'right'}}>{message}</Text>
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
        fontSize: 30,
        padding: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputContainer: {
        width: "90%",
        marginBottom: 15,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal:5,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    button: {
        width: "90%",
        height: 60,
        borderRadius: 8,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
          fontFamily:'Arial'
    },
    logo:{
        width:200,
        height:150
    }
});

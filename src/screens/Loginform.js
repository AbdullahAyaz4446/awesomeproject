import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import SignUpform from './SignUpform';

const LoginForm = () => {
    
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("");
   
    const data = [
        { name: 'abdullah', password: '4446' },
        { name: 'Wajahat', password: '12345' },
        { name: 'Mughees', password: '0001' },
        { name: 'Tuheed', password: '1111' },
        { name: 'Faiz', password: '9999' },
        { name: 'ahsan', password: '991' }
    ];

    const handleLogin = () => {
        const user = data.find(user => user.name.toLowerCase() === name.toLowerCase() && user.password === password);
        if (!name || !password) {
            setName("");
            setPassword("");
            setColor('red')
            setMessage("Enter username and password");
        }
        else if (user) {
            setName("");
            setPassword("");
            setMessage("");
            setColor('green')
            setMessage("LogIn Successfully");
      
        } else {
            setColor('red')
            setMessage("Invalid username or password");
        }
    };


    return (
        <View style={styles.main}>
            {/* <Image source={require('/Users/macbookpro/awesomeproject/Content/images/undraw_Login_re_4vu2-2-removebg-preview.png')} style={styles.logo} /> */}

            {/* <LottieView source={require('../animation/Animation - 1730560043027.json')} autoPlay loop style={styles.logo} /> */}
            <Text style={styles.text}>Login 🔓</Text>

            <View style={styles.inputContainer}>
                <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter Username</Text>
                <TextInput
                    placeholder="Username"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter Password</Text>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <Text style={{ color: color, textAlign: 'right' }}>{message}</Text>
            </View>

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
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
    backgroundColor: 'white',
    paddingTop:20,
    paddingHorizontal:20

  
  },
  text: {
    fontSize: 30,
marginVertical:10,
    fontWeight: 'bold',
   
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
 
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 60,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,


  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Arial'
  },
  logo: {
    width: 300,
    height: 350,
  },

});
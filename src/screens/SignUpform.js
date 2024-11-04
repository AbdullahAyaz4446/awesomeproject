import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import  Ionicons  from  'react-native-vector-icons/Ionicons';

const SignUpform = () => { 
    // const navigation = useNavigation();
    // const { setData } = route.params; 
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("");

  //   const Submit = () => {
  //     if (name && password) { 
  //         setData({ name, password }); 
  //         console.log("User submitted:", { name, password }); 
  //         navigation.navigate('Loginform'); 
  //     } else {
  //         setColor('red'); 
  //         setMessage("Please fill out all fields."); // Notify user to fill fields
  //     }
  // };
    return (
        <View style={styles.main}>
          <TouchableOpacity style={{  position: 'absolute',
    top: 20,
    left: 20}}>
          <Ionicons name="arrow-back-circle" size={45} />
          </TouchableOpacity>
            <LottieView source={require('../animation/Animation - 1730561905049.json')} autoPlay loop style={styles.logo} />
            <Text style={styles.text}>Sign Up 🔏</Text>

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
            </View>
         
            <TouchableOpacity  style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          <Text>-------------------------------------or--------------------------------------</Text>
        </View>
    );
};

export default SignUpform

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical:30
  
  },
  text: {
    fontSize: 30,
    padding: 30,
    fontWeight: 'bold',
   
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
    paddingHorizontal:20
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
    fontFamily: 'Arial'
  },
  logo: {
    width: 300,
    height: 200,
  }
});
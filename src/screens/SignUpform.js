import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView ,Image} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import  Ionicons  from  'react-native-vector-icons/Ionicons';

const SignUpform = ({route}) => { 
    const navigation = useNavigation();
    const { Data, Addnewuser } = route.params;
    const [id, setid] = useState('');
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcpassword] = useState('')
    const [gender, setgender] = useState('');
    const [active, setactive] = useState('');
    const [materital, setmaterital] = useState('');
    const [graduated, setGraduated] = useState('');
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("");

    const Submit = () => {
      if (id&&name&&email&&password) { 
        Addnewuser({ id, name, password, email });

          console.log("User submitted:", { id,name, password,email }); 
          navigation.navigate('Login'); 
      } else {
          setColor('red'); 
          setMessage("Please fill out all fields."); 
      }
  };
    return (
        <View style={styles.main}>
          {/* <TouchableOpacity style={{  position: 'absolute',
    top: 20,
    left: 20}}>
          <Ionicons name="arrow-back-circle" size={45} />
          </TouchableOpacity> */}
            <LottieView source={require('../animation/Animation - 1730561905049.json')} autoPlay loop style={styles.logo} />
            <Text style={styles.text}>Sign Up 🔏</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.inputContainer}>
                <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter ID</Text>
                <TextInput
                    placeholder="ID"
                    value={id}
                    onChangeText={setid}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter name</Text>
                <TextInput
                    placeholder="name"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter Email</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setemail}
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
                <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter Conform Password</Text>
                <TextInput
                    placeholder="Conform Password"
                    value={cpassword}
                    onChangeText={setcpassword}
                    secureTextEntry
                    style={styles.input}
                />
            </View>
         
            <TouchableOpacity  onPress={Submit} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={{textAlign:'center'}}>-------------------------------------or--------------------------------------</Text>
            <TouchableOpacity  style={styles.buttonlogo}>
                 <Image source={require('/Users/macbookpro/awesomeproject/src/images/google.png')} style={{width:150,height:150}} />
            </TouchableOpacity>
            </ScrollView>
         
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
    paddingHorizontal: 20
  
  },
  text: {
    fontSize: 30,
    padding: 30,
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
    width: 200,
    height: 150,
  },
  buttonlogo: {
    width: "100%",
    height: 60,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  }
});
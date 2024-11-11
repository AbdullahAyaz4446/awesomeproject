import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Checkbox, RadioButton, TextInput } from 'react-native-paper';
import LottieView from 'lottie-react-native';

const Radiobutton = () => {
    
    const [gender, setGender] = useState('male');
    const [status, setStatus] = useState(false);
    const [maritalStatus, setMaritalStatus] = useState(false);
    const [graduated, setGraduated] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const[id,setid]=useState('')
    const[data,setdata]=useState([])
    const[count,setcount]=useState(0)
  


const savedata=()=>{
    
    const newData = {
        id:id,
        name: name, 
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        gender: gender,
        status: status,
        maritalStatus: maritalStatus,
        graduated: graduated,
    };
    setdata([...data,newData]);
    setcount(count+1)
    setid('')
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setGender('male')
    setStatus(false)
    setMaritalStatus(false)
    setGraduated(false)
    Alert.alert("Data  Inserted Succesfully")
}

    return (
        <View style={styles.main}>

            <LottieView source={require('../animation/Animation - 1730561905049.json')} autoPlay loop style={styles.logo} />
            <Text style={styles.text}>count:{count}</Text>
            <ScrollView>
            <TextInput placeholder='id' value={id} onChangeText={setid} style={styles.textinput} />
            <TextInput placeholder='Name' value={name} onChangeText={setName} style={styles.textinput} />
            <TextInput placeholder='Email' value={email} onChangeText={setEmail} style={styles.textinput} />
            <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry style={styles.textinput} />
            <TextInput placeholder='Confirm Password' value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry style={styles.textinput} />
            <View style={styles.row}>
                <RadioButton onPress={() => setGender('male')} status={gender === 'male' ? 'checked' : 'unchecked'} />
                <Text>Male</Text>
                <RadioButton onPress={() => setGender('female')} status={gender === 'female' ? 'checked' : 'unchecked'} />
                <Text>Female</Text>
            </View>
            <View style={styles.row}>
                <RadioButton onPress={() => setStatus(true)} status={status ? 'checked' : 'unchecked'} />
                <Text>Active</Text>
                <RadioButton onPress={() => setStatus(false)} status={!status ? 'checked' : 'unchecked'} />
                <Text>Inactive</Text>
            </View>
            <View style={styles.row}>
                <Checkbox onPress={() => setMaritalStatus(!maritalStatus)} status={maritalStatus ? 'checked' : 'unchecked'} />
                <Text>Married</Text>
                <Checkbox onPress={() => setGraduated(!graduated)} status={graduated ? 'checked' : 'unchecked'} />
                <Text>Graduated</Text>
            </View>
          
          <View style={styles.buttonconatiner}>
          <Button mode='contained' rippleColor='#D1C2E0' contentStyle={{height:50}} style={styles.button}  onPress={savedata}>Submit</Button>
            <Button mode='contained' rippleColor='#D1C2E0' contentStyle={{height:50}} style={styles.button} onPress={()=>{
                     const user = data.find(user => user.id);
                     if(user){
                        setid(user.id)
                        setName(user.name)
                        setEmail(user.email)
                        setGender(user.gender)
                        setPassword(user.password)
                        setStatus(user.status)
                        setMaritalStatus(user.maritalStatus)
                        setGraduated(user.Graduated)
                        setConfirmPassword(user.confirmPassword)
                     }
            }} >Show data</Button>
          </View>
           
            </ScrollView>
        </View>
    );
}

export default Radiobutton;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
        alignItems:'center',
        padding:10
    },
    textinput: {
        borderWidth: 0,
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'white',width:'100%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    text: {
        fontSize: 30,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    logo: {
        width:300,
        height: 250,
    },
    button:{
        margin:10,width:'60%'
    },buttonconatiner:{
        alignSelf:'center'
    }
 
});

import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Checkbox, RadioButton, TextInput } from 'react-native-paper';
import LottieView from 'lottie-react-native';

const Login = () => {
    const [gender, setGender] = useState('');
    const [junnir, setjunior] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [BS, setbs] = useState(false);
    const [MS, setMS] = useState(false);
    const [name, setName] = useState('');
    const [phone, setphone] = useState('');
    const [salary, setsalary] = useState(".......")
    const showsalary = () => {
        let s;
        if (junnir=='junior') {
            s = maritalStatus == 'Married' ? 5000 * 1.1 : 5000;

        }
        else {
            s = maritalStatus == 'Married' ? 9000 * 1.5 : 9000;
        }
        setsalary(s.toString())

    }
    return (
        <View style={styles.main}>

            <LottieView source={require('../animation/Animation - 1730561905049.json')} autoPlay loop style={styles.logo} />

            <ScrollView>
                <TextInput placeholder='Name' value={name} onChangeText={setName} style={styles.textinput} />
                <TextInput placeholder='Enter mobile number' value={phone} keyboardType='numeric' onChangeText={setphone} style={styles.textinput} />
                <View style={styles.row}>
                    <RadioButton onPress={() => setjunior('junior')} status={junnir=='junior' ? 'checked' : 'unchecked'} />
                    <Text>Junior</Text>
                    <RadioButton onPress={() => setjunior('senior')} status={junnir=='senior' ? 'checked' : 'unchecked'} />
                    <Text>Senior</Text>
                </View>

                <View style={styles.row}>
                    <RadioButton onPress={() => setGender('male')} status={gender === 'male' ? 'checked' : 'unchecked'} />
                    <Text>Male</Text>
                    <RadioButton onPress={() => setGender('female')} status={gender === 'female' ? 'checked' : 'unchecked'} />
                    <Text>Female</Text>
                </View>
                <View style={styles.row}>
                    <RadioButton onPress={() => setMaritalStatus('Married')} status={maritalStatus == 'Married' ? 'checked' : 'unchecked'} />
                    <Text>Married</Text>
                    <RadioButton onPress={() => setMaritalStatus('unMarried')} status={maritalStatus == 'unMarried' ? 'checked' : 'unchecked'} />
                    <Text>UnMarried</Text>
                </View>
                <View style={styles.row}>
                    <Checkbox onPress={() => setbs(!BS)} status={!BS ? 'checked' : 'unchecked'} />
                    <Text>BS</Text>
                    <Checkbox onPress={() => setMS(!MS)} status={!MS ? 'checked' : 'unchecked'} />
                    <Text>MS</Text>
                </View>

                <View style={styles.buttonconatiner}>
                    <Button mode='contained' rippleColor='#D1C2E0' contentStyle={{ height: 50 }} style={styles.button} onPress={showsalary} >Expected Salary</Button>
                    <Text style={{textAlign:'center'}}>Your Salary{salary}is</Text>
                </View>

            </ScrollView>

        </View>
    )
}

export default Login
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
      
    },
    textinput: {
        borderWidth: 0,
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'white', width: '100%'
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
        width: 300,
        height: 250,
    },
    button: {
        margin: 10, width: '60%'
    }, buttonconatiner: {
        alignSelf: 'center'
    }

});
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import React from 'react';

const Calculator = () => {
    const [val, setval] = useState("");
    const [val2, setval2] = useState("");
    const [res, setrest] = useState("");
    const [p, setp] = useState([])
    const [p1, setp1] = useState('')
    const Showbutton = (t) => {
        return (
            <TouchableOpacity key={t} onPress={() => {
                var num1 = parseFloat(val);
                var num2 = parseFloat(val2);
                let result;
                if (!val || !val2) {
                    setrest("invalid insult")
                    return
                }
                else {
                    let operationString;
                    let ans;
                    switch (t) {
                        case '+':
                            ans = num1 + num2;
                            operationString = `${num1} ${t} ${num2} = ${num1 + num2}`;
                            break;
                        case '-':
                            ans = num1 - num2;
                            operationString = `${num1} ${t} ${num2} = ${num1 - num2}`;
                            break;
                        case '*':
                            ans = num1 * num2;
                            operationString = `${num1} ${t} ${num2} = ${num1 * num2}`;
                            break;
                        case '/':
                            ans = num1 / num2;
                            operationString = `${num1} ${t} ${num2} = ${num1 / num2}`;
                            break;
                        default:
                            operationString = 'Invalid Operator';
                            break;
                    }


                    setrest(ans.toString());
                    setp([...p, operationString]);
                }
            }} style={styles.buttonstyle}>
                <Text style={styles.buttontext}>
                    {t}
                </Text>
            </TouchableOpacity>
        )

    }
    const Allclear = () => {
        setval('')
        setval2('')

    }
    // const calculate = (op) => {
    //     var num1=parseFloat(val);
    //     var num2=parseFloat(val2);
    //     let result;
    //     if(!val||!val2){
    //         setrest("invalid insult")
    //         return
    //     }
    //     else{
    //         switch(op){
    //             case '+':
    //                 result=num1+num2;
    //                 break;
    //             case '-':
    //                 result=num1-num2;
    //                 break;
    //             case '*':
    //                 result=num1*num2;
    //                 break; 
    //             case '/':
    //                 result=num1/num2;
    //                 break; 
    //             default:
    //                 result = 'Invalid Operator';

    //         }
    //         setrest(result.toString())
    //     }

    // } 

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Calculator</Text>
            <TextInput placeholder='Enter value 1' value={val}  keyboardType='numeric' onChangeText={setval} style={styles.input} />
            <TextInput placeholder='Enter value 2' value={val2} keyboardType='numeric' onChangeText={setval2} style={styles.input} />
            <View style={styles.row}>
                {
                    ['+', '-', '*', '/'].map(val => Showbutton(val))
                }
            </View>
            <TouchableOpacity onPress={() => Allclear()} style={styles.buttonstyle}>
                <Text style={styles.buttontext}>AC</Text>
            </TouchableOpacity>
            <TextInput placeholder='Result' value={res} onChangeText={setrest} editable={false} style={styles.input} />
            <Text style={styles.title}>previous result</Text>
            <ScrollView style={{flexGrow:1}}>
            <View>
                {
                    p.map((v, index) => (
                        <Text key={index}>
                            {v}
                        </Text>
                    ))
                }
            </View>
            </ScrollView>
     

        </View>
    );
};

export default Calculator;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        
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
        padding: 15,
        marginBottom: 20,
        fontSize: 20
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
        width: 70,
        height: 70,
        backgroundColor: 'pink'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});

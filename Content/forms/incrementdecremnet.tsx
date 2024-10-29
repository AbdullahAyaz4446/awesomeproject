import { StyleSheet, Text, View, Button } from 'react-native'
import { useState } from 'react';
import React from 'react'
import styles from '../Style/incremnetdecremnet';

const Incrementdecremnet = () => {
    const [count, setCount] = useState(0);
    return (
        <View>
            <View style={styles.header}>
                <Text style={{ textAlign: 'center', fontSize: 18 }}>My Code</Text>
            </View>
            <View style={styles.header}>
                {count > -1 ? (
                    <Text style={{ textAlign: 'center' }}>Count: {count}</Text>
                ) : (
                    <Text style={{ textAlign: 'center' }}>Not able to decrement below 0</Text>
                )}

            </View>
            <View style={styles.buttonContainer}>
                <Button title="Increment" onPress={() => setCount(count + 1)} />
                <Button title="Decrement" onPress={() => setCount(count - 1)} />
            </View>
        </View>
    )
}

export default Incrementdecremnet;




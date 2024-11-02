import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUpform = () => {
  return (
    <View style={styles.main}>
      <Text>SignUpform</Text>
    </View>
  )
}

export default SignUpform

const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
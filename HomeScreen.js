import React, { useLayoutEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen( {navigation}) {

  const [message, setMessage] = useState('Testing')
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'magenta'
      },
      headerRight: () => (
        <AntDesign
          style={styles.navButton}
          name="stepforward"
          size={24}
          onPress={() => navigation.navigate('Second', {message: message})}
        />
      )
    })
  }, [message]) 

  return (
    <View style={styles.container}>
      <Text>This is the home screen {message} </Text>
      <TextInput onChangeText={text => setMessage(text)} value={message} placeholder='Type message here'></TextInput>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  navButton: {
    marginRight: 5,
    padding: 4,
  }
})
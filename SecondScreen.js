import React, { useEffect, useLayoutEffect } from 'react';
import { View,StyleSheet, Text } from 'react-native';

export default function SecondScreen({route, navigation}) {

  useEffect(() => {
    if (route.params?.message){
      alert(route.params.message)
    }
  }, [])
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'yellow'
      }
    })
  }, []) //toimii
  

  return (
    <View style = {styles.container}>
        <Text>This is the second screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})
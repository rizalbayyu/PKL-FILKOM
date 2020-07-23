import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function DevicesScreenTerpilih(){
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => console.log('Device 1 di klik')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Device 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Device 2 di klik')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Device 2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Device 3 di klik')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Device 3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Device 4 di klik')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Device 4</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems:'center'
    },

    button: {
        marginBottom: 30,
        width: 300,
        alignItems: 'center',
        backgroundColor:'#56C9FB'
    },
    buttonback: {
      backgroundColor:'#56C9FB',
      position:'absolute',
      top:0,
      left:0
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 25,
      padding: 20,
      color: 'white'
    }
});
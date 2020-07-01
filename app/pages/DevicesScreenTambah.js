import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class DevicesScreenTambah extends Component <{}>{
  pilihdevice(){
    Actions.pilihdevice()
  }
  render(){
    return (
      <View style={styles.container}>
        <Button style={styles.buttonback} onPress={Actions.pop} title="< Go Back"></Button>
        <Text style={styles.text}>Tambahkan device Anda</Text>
        <TouchableOpacity onPress={this.pilihdevice}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Tambah Device</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        alignItems:'center',
        justifyContent :'center',
        
    },

    text: {
        fontSize: 25,
        color:'#56C9FB'
    },

    button: {
        backgroundColor:'#56C9FB',
        width: 100,
        margin: 10
    },
    buttonback: {
      backgroundColor:'#56C9FB',
      position:'absolute',
      top:0,
      left:0
    },

    buttonText: {
      textAlign: 'center',
      fontSize: 15,
      padding: 5,
      color: 'white'
    }
});
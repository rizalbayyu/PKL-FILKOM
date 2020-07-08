import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Profil extends Component <{}>{

  login(){
    Actions.login()
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Username: PKL</Text>
        <TouchableOpacity onPress={this.login}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
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
        width: 300,
        height: 40,
        backgroundColor:'#ffffff',
        borderColor: '#FF0000',
        color:'#FF0000',
        borderWidth: 3,
        borderRadius: 25,
        paddingHorizontal:16,
        marginVertical: 10,
        paddingVertical: 5
    },

    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#56C9FB',
      textAlign:'center',
      fontWeight: "bold"
    }
});
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';


export default function listSensor({nama,value,onClick}){
  
  return (
    <View>
      {/* high order function = mengembalikan data ke home */}
      <TouchableOpacity onPress={() => onClick(nama,value)}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{nama}</Text>
            <Text style={styles.buttonText}>{value}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'stretch'
    },

    lineStyle: {
      borderWidth: 1,
      marginBottom: 70,
      borderColor: '#56C9FB',
    },

    buttonTop: {
      marginBottom: 20,
      width: 80,
      height: 80,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'#56C9FB',
      borderRadius:40
    },

    buttonTopText: {
      textAlign: 'center',
      fontSize: 12,
      padding: 10,
      color: 'white'
    },

    button: {
      marginBottom: 40,
      borderColor: '#56C9FB',
      borderWidth: 2,
      height: 120,
      width: 120,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'white'
    },

    buttonText: {
      textAlign: 'center',
      fontSize: 16,
      padding: 10,
      color: '#56C9FB'
    }
});
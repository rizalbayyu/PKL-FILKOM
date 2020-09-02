import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default function listSensor({nama,value,onClick}){

  var pesanoff = {"Aktuator": "Off"};

  var pesanon = {"Aktuator": "On"};

  const axios = require('axios')
  const api = axios.create({
    baseURL: 'http://iotcloud.tujuhlangit.id:8000',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
  });

  async function diklik(){
    
    if (nama == "Aktuator") {
      var cred_device_id = await AsyncStorage.getItem('@pointer_device_id')
      if (value == "On") {
        fetch('http://iotcloud.tujuhlangit.id:8000/api/v1/'+cred_device_id+'/telemetry', {
          method: 'post',
          body: JSON.stringify(pesanoff),
        })
      } else {
        fetch('http://iotcloud.tujuhlangit.id:8000/api/v1/'+cred_device_id+'/telemetry', {
          method: 'post',
          body: JSON.stringify(pesanon),
        })
      }
      onClick(nama,value)  
    } else {
      onClick(nama,value)
    }
  }
  return (
    <View>
      {/* high order function = mengembalikan data ke home */}
      <TouchableOpacity onPress={() => diklik()}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{nama}</Text>
            <Text style={styles.buttonText}>{value}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
      marginBottom: 40,
      borderColor: '#56C9FB',
      borderWidth: 2,
      height: 150,
      width: 150,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'white'
    },

    buttonText: {
      textAlign: 'center',
      fontSize: 18,
      padding: 10,
      color: '#56C9FB'
    }
});
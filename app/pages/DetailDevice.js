import React, { useState, useEffect } from "react";
import { Switch, Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const DetailDevice = () => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    console.log(isEnabled);
var enable = isEnabled;
console.log(enable)

  //Untuk akses api
  const axios = require('axios')
  const [token, setToken] = useState(null);
  const api = axios.create({
    baseURL: 'http://iotcloud.tujuhlangit.id:8000',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
  });

async function getToken(){
  var response = await AsyncStorage.getItem('@token_user');
  setToken(response);
}

useEffect(() => {
  getToken();
},[]);

function sendData(isenable) {
  var pesanoff = {
    "Aktuator": "Off",
    }
  var pesanon = {
    "Aktuator": "On",
  }
  if (!isenable){
    fetch('http://iotcloud.tujuhlangit.id:8000/api/v1/hjNYhUBLoQhTc7BVhwRV/telemetry', {
      method: 'post',
      body: JSON.stringify(pesanoff)
    }).then(function(response) {
      return response.json();
    })      
  }
  if(isenable){
    fetch('http://iotcloud.tujuhlangit.id:8000/api/v1/hjNYhUBLoQhTc7BVhwRV/telemetry', {
      method: 'post',
      body: JSON.stringify(pesanon)
    }).then(function(response) {
      return response.json();
    })
  }
}

sendData(enable)
  //use effect berguna untuk memanggil fungsi setelah halaman dirender

  return (
    <View style={styles.container}>
      {/*Text to show the text according to switch condition*/}
      <Text><h1>Device1</h1></Text>
      <Text>Aktuator Device</Text>
      {/*Switch with value set in constructor*/}
      {/*onValueChange will be triggered after switch condition changes*/}
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>Description:</Text>
      <Text>Los Illuminados</Text>
    </View>
  );   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
  }
})
export default DetailDevice;

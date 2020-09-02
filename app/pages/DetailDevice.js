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



function sendData(isenable) {
  var pesanoff = {"Aktuator": "Off"};

  var pesanon = {"Aktuator": "On"};

  if (!isenable){
    fetch('http://iotcloud.tujuhlangit.id:8000/api/v1/isDnclxeqSyw27P7IGpI/telemetry', {
      method: 'post',
      body: JSON.stringify(pesanoff),
    })      
  }
  if(isenable){
    fetch('http://iotcloud.tujuhlangit.id:8000/api/v1/isDnclxeqSyw27P7IGpI/telemetry', {
      method: 'post',
      body: JSON.stringify(pesanon),
    })
  }
}

// sendData(enable)

  return (
    <View style={styles.container}>
      {/*Text to show the text according to switch condition*/}
      <Text>Device1</Text>
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
  
  }
})
export default DetailDevice;

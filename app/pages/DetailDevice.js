import React, { useState, useEffect } from "react";
import { Switch, Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const DetailDevice = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    console.log(isEnabled);
var enable = isEnabled;
console.log(enable)
  
  //Untuk akses api
  const axios = require('axios')
  let token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyaXphbGJheXU5MEBnbWFpbC5jb20iLCJzY29wZXMiOlsiQ1VTVE9NRVJfVVNFUiJdLCJ1c2VySWQiOiI3NDI1YjQyMC1jNWIyLTExZWEtYjRiYy04NWQzYjlmZmRiZTYiLCJmaXJzdE5hbWUiOiJSaXphbCIsImVuYWJsZWQiOnRydWUsImlzUHVibGljIjpmYWxzZSwidGVuYW50SWQiOiI1YWYxOWZjMC1hNDY4LTExZWEtYTRkNC03MTY3ZTBmMGZmMDUiLCJjdXN0b21lcklkIjoiMWU0ZDQ2YzAtYzU1ZS0xMWVhLWI0YmMtODVkM2I5ZmZkYmU2IiwiaXNzIjoidGhpbmdzYm9hcmQuaW8iLCJpYXQiOjE1OTc5MjY2ODYsImV4cCI6MTU5NzkzNTY4Nn0.rgmxg7PtrhZVkMk9Me52S-w5oxn-LCzZUUaRYq8hk6irstZ8lqkhNQdv_-soUkTYQ1zYvdNykIcot7fohBYBbg";
  const api = axios.create({
    baseURL: 'http://iotcloud.tujuhlangit.id:8080',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
  });

  async function getUserDevices(token, userId){
    try {
      const response = await api.get('/api/customer/'+userId+"/devices?pageSize=100&page=0", {
          headers : {
              "X-Authorization" : 'Bearer '+token
          }
      }); 

    } catch (error) {
        console.error(error);
    }
}

async function getUserInfo(){
  token = await AsyncStorage.getItem('@token_user');
  // console.log('User Token: ', token)
  try {
      const response = await api.get('/api/auth/user', {
          headers : {
              "X-Authorization" : 'Bearer '+token
          }
      });
      const userId = response.data.customerId.id
      await AsyncStorage.setItem('@username', response.data.name);
      getUserDevices(token, userId)
      
  } catch (error) {
      console.log(error.request)
      // console.error(error.response.data);
  }
}

async function WebSocketAPIExample(IdDevice) {
  //http(s)://host:port/api/plugins/telemetry/{entityType}/{entityId}/keys/attributes => ke attribute
  var webSocket = new WebSocket("ws://iotcloud.tujuhlangit.id:8080/api/ws/plugins/telemetry?token=" + token);

  if (IdDevice === "YOUR_DEVICE_ID") {
      alert("Invalid device id!");
      webSocket.close();
  }

  if (token === "YOUR_JWT_TOKEN") {
      alert("Invalid JWT token!");
      webSocket.close();
  }

  webSocket.onopen = function () {
    if (enable){
      var pesan = {
        "attribute1": "On",
        }
      var data = JSON.stringify(pesan);
      webSocket.send(data);
      alert("Message is sent: " + data);
    }
    if (!enable){
      var pesan = {
        "attribute1": "Off",
        }
      var data = JSON.stringify(pesan);
      webSocket.send(data);
      alert("Message is sent: " + data);
    }
  };

  webSocket.onclose = function (event) {
      alert("Connection is closed!");
  };
}
  //use effect berguna untuk memanggil fungsi setelah halaman dirender
  useEffect(() => {
    getUserInfo();
  },[]);
  
  WebSocketAPIExample(isEnabled)

  console.log('token: ', token)

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
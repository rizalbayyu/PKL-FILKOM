import React, { Component,useState,Fragment,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {Buffer} from 'buffer';
global.Buffer = Buffer;
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import ListDevice from '../components/ListDevice';
import ListSensor from '../components/ListSensor';

//Untuk akses api
const axios = require('axios')
let token = "";
const api = axios.create({
  baseURL: 'http://iotcloud.tujuhlangit.id:8080',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default function Home() {

  //usestate buat device
  const [devices,setDevices] = useState(null);
  // console.log(devices);
  const [olahData,setOlahData] =useState([]);
  const [sensors,setSensors] = useState(null);
  // console.log(sensors);
  
  let hasil_sensor = []
  let result = ""

  async function getUserDevices(token, userId){
    try {
      const response = await api.get('/api/customer/'+userId+"/devices?pageSize=100&page=0", {
          headers : {
              "X-Authorization" : 'Bearer '+token
          }
      }); 
    setDevices(response.data.data)

    } catch (error) {
        console.error(error);
    }
}

  async function getDeviceInfo(token, deviceId) {
    try {
      const response = await api.get('/api/device/info/'+deviceId, {
        headers : {
          "X-Authorization" : 'Bearer ' + token
        }
      });
      console.log(response);
      const deviceInfo = response.data.name
    } catch (error) {
      console.error(error);
    }
  }

  async function getDeviceCredentials(token, deviceId){
      try {
          const response = await api.get('/api/device/'+deviceId+"/credentials", {
              headers : {
                  "X-Authorization" : 'Bearer '+token
              }
          });
          const credentials = response.data
          console.log('getDeviceCredentials ', credentials);
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

  async function latestTelemetry(entityId) {
    var webSocket = new WebSocket("ws://iotcloud.tujuhlangit.id:8080/api/ws/plugins/telemetry?token=" + token);
    if (entityId === "YOUR_DEVICE_ID") {
        console.log("Invalid device id!");
        webSocket.close();
    }

    if (token === "YOUR_JWT_TOKEN") {
        console.log("Invalid JWT token!");
        webSocket.close();
    }

    webSocket.onopen = function () {
        var object = {
            tsSubCmds: [
                {
                    entityType: "DEVICE",
                    entityId: entityId,
                    scope: "LATEST_TELEMETRY",
                    cmdId: 10
                }
            ],
            historyCmds: [],
            attrSubCmds: []
        };
        var data = JSON.stringify(object);
        webSocket.send(data);
    };

    webSocket.onmessage = function (event) {
      // console.log(event.data);
        var received_msg = JSON.parse(event.data);
        // console.log(received_msg);
        setSensors(received_msg.data);
    };

    webSocket.onclose = function (event) {
        console.log("Connection is closed!");
    };
  }
  function checkArray(){
    if (hasil_sensor.length == 0) {
      console.log("kosong")
    } else {
      console.log(hasil_sensor)
    }
  }
  //use effect berguna untuk memanggil fungsi setelah halaman dirender
  useEffect(() => {
    getUserInfo();
  },[]);

  useEffect(()=>{
    if (sensors){
      let total = []
      Object.keys(sensors).forEach((key,index)=>{
        sensors[key].forEach(data=>{
          let result = { nama:key,
            value:data[1]}
            total.push(result)
        })
       });
       setOlahData(total);
       console.log(total);
    }
  },[sensors])
  
  return (
      <View style={styles.container}>
        {/* ngecek device null apa ngga, kalau null nampilkan fragment kalau tidak bikin mapping
        devices.map tiap data di device*/}
        <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-evenly'}}>
          {devices ? devices.map(data=>(
            // ...data merupakan spread operator untuk menyebarkan setiap data jadi props
            <ListDevice {...data} onClick={(id)=>latestTelemetry(id)}/>
          )) : <Fragment/>}
        </View>
        <View style={styles.lineStyle}/>
        <View style={styles.info}>
          {olahData ? olahData.map(data=>(
            <ListSensor {...data} onClick={(key,value)=>console.log(key + " = " + value)}/>
          )) : <Fragment/>}
        </View>
      </View>
  )
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'stretch'
    },

    lineStyle: {
      borderWidth: 1,
      marginBottom: 70,
      borderColor: '#56C9FB',
    },

    info:{
      flexDirection:'row', 
      justifyContent:'space-around',
      display: 'flex',
      flexWrap: 'wrap'
    }
});
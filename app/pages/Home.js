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
// var mqtt    = require('@taoqf/react-native-mqtt');
// var options = {
// 	protocol: 'mqtts',
// 	// clientId uniquely identifies client
// 	// choose any string you wish
// 	clientId: 'clientId-ATwwDGasfas' 	
// };
// var client  = mqtt.connect('mqtt://test.mosquitto.org:8081', options);
// client.subscribe('irfanmaulanaaaaa/suhu');

//Untuk akses api
const axios = require('axios')
let token = "";
const api = axios.create({
  baseURL: 'http://iotcloud.tujuhlangit.id:8080',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default function Home() {
  // var note;
  // client.on('message', function (topic, message) {
  //   note = message.toString();
  //   // Updates React state with message 
  //   setMesg(note);
  //   console.log(note);
  //   client.end();
  // });
  // //usestate buat mqtt
  // const [mesg, setMesg] = useState(<Text>0</Text>);

  //usestate buat device
  const [devices,setDevices] = useState(null);
  console.log(devices);

  const [sensors,setSensors] = useState(null);
  console.log(sensors);
  
  let hasil_sensor = []

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
        // console.log(received_msg.data.humidity);
    };

    webSocket.onclose = function (event) {
        console.log("Connection is closed!");
    };
  }
  //use effect berguna untuk memanggil fungsi setelah halaman dirender
  useEffect(() => {
    getUserInfo();
  },[]);
  
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
        <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-around'}}>
        {sensors ? Object.keys(sensors).map(function(key,index){
          sensors[key].map(data=>{hasil_sensor.push(key+" "+data[1])})
        }) : <Fragment/>}

        {hasil_sensor ? hasil_sensor.map(data=>(
            // ...data merupakan spread operator untuk menyebarkan setiap data jadi props
            <ListSensor {...data} onClick={(id)=>latestTelemetry(id)}/>
          )) : <Fragment/>}
        {/* {sensors ? sensors.map(data=>(
            <ListSensor {...data} onClick={console.log(data)}/>
          )) : <Fragment/>} */}
          {/* <TouchableOpacity onPress={() => console.log('Suhu')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Suhu</Text>
              <Text style={styles.buttonText}>0 C</Text>
            </View>
          </TouchableOpacity> */}
        </View>

        <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-around'}}>
          <TouchableOpacity onPress={() => console.log("ini:"+hasil_sensor)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>DO</Text>
              <Text style={styles.buttonText}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Turbidity')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Turbidity</Text>
              <Text style={styles.buttonText}>0</Text>
            </View>
          </TouchableOpacity>
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

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
var mqtt    = require('@taoqf/react-native-mqtt');
var options = {
	protocol: 'mqtts',
	// clientId uniquely identifies client
	// choose any string you wish
	clientId: 'clientId-ATwwDGasfas' 	
};
var client  = mqtt.connect('mqtt://test.mosquitto.org:8081', options);
client.subscribe('irfanmaulanaaaaa/suhu');

//Untuk akses api
const axios = require('axios')

const api = axios.create({
  baseURL: 'http://iotcloud.tujuhlangit.id:8080',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default function Home() {
  var note;
  client.on('message', function (topic, message) {
    note = message.toString();
    // Updates React state with message 
    setMesg(note);
    console.log(note);
    client.end();
  });
  //usestate buat mqtt
  const [mesg, setMesg] = useState(<Text>0</Text>);

  //usestate buat device
  const [devices,setDevices] = useState(null);
  console.log(devices);
  
  async function getUserDevices(token, userId){
    try {
      const response = await api.get('/api/customer/'+userId+"/devices?pageSize=100&page=0", {
          headers : {
              "X-Authorization" : 'Bearer '+token
          }
      });
      // console.log(response.data.data)
      setDevices(response.data.data)
      // const deviceList = response.data.data 
      // console.log('getUserDevices', deviceList)
      // console.log("User Device Token Lists");

      // deviceList.map((device, index) => {
      //     // getDeviceCredentials(token, device.id.id)
      //     getDeviceInfo(token,device.id.id)
      // })
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
      // console.log("Device ID : ");
      // console.log(deviceInfo);
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
    const token = await AsyncStorage.getItem('@token_user');
    // console.log('User Token: ', token)
    try {
        const response = await api.get('/api/auth/user', {
            headers : {
                "X-Authorization" : 'Bearer '+token
            }
        });
        const userId = response.data.customerId.id
        await AsyncStorage.setItem('@username', response.data.name);
        // console.log("User ID : ");
        // console.log(userId);
        getUserDevices(token, userId)
        
    } catch (error) {
        console.log(error.request)
        console.error(error.response.data);
    }
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
            <ListDevice {...data} onClick={(id,test)=>console.log('console di home ',id,test)}/>
          )) : <Fragment/>}
          </View>
          
          <View style={styles.lineStyle}/>

          <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity onPress={() => console.log('pH')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>pH</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Suhu')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Suhu</Text>
                <Text style={styles.buttonText}>{mesg} C</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity onPress={() => console.log('DO')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>DO</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Turbidity')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Turbidity</Text>
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

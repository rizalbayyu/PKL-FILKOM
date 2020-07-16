// import * as React from 'react';
import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ViewPagerAndroid } from 'react-native';
import {Actions} from 'react-native-router-flux';
import HomePage from './app/pages/Home';
import Devices from './app/pages/DevicesScreenTerpilih';
import Profile from './app/pages/Profil';
import AsyncStorage from '@react-native-community/async-storage';


const Stack = createStackNavigator();

//Untuk akses api
const axios = require('axios')

const api = axios.create({
  baseURL: 'http://iotcloud.tujuhlangit.id:8080',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});


function HomeScreen() {
  return (
    <Stack.Navigator
    initialRouteName="HomePage">
    <Stack.Screen name="Home" component={HomePage}/>
  </Stack.Navigator>
  );
}

function DevicesScreen() {
  return (
    <Stack.Navigator
    initialRouteName="Devices">
    <Stack.Screen name="Devices" component={Devices}/>
  </Stack.Navigator>
  );
}

function ProfileScreen() {
  return (
    <Stack.Navigator
    initialRouteName="Profile">
    <Stack.Screen name="Profile" component={Profile}/>
  </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function MainPage() {


  async function getUserDevices(token, userId){
    try {
        const response = await api.get('/api/customer/'+userId+"/devices?pageSize=100&page=0", {
            headers : {
                "X-Authorization" : 'Bearer '+token
            }
        });
        const deviceList = response.data.data 
        console.log('getUserDevices', deviceList)
        console.log("User Device Token Lists");

        deviceList.map((device, index) => {
            // getDeviceCredentials(token, device.id.id)
            getDeviceInfo(token,device.id.id)
            
        })
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
      // getDeviceInfo(token, device.id.id)
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
    console.log('User Token: ', token)
    try {
        const response = await api.get('/api/auth/user', {
            headers : {
                "X-Authorization" : 'Bearer '+token
            }
        });
        const userId = response.data.customerId.id
        console.log("User ID : ");
        console.log(userId);
        getUserDevices(token, userId)
        
    } catch (error) {
        console.log(error.request)
        console.error(error.response.data);
    }
  }
  getUserInfo();
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Devices" component={DevicesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  
}
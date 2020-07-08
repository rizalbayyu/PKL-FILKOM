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

const Stack = createStackNavigator();

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

export default class MainPage extends Component<{}> {
  render(){
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
}
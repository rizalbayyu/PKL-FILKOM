// import * as React from 'react';
import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ViewPagerAndroid } from 'react-native';
import {Actions} from 'react-native-router-flux';
import DevicesScreenTambah from './app/pages/DevicesScreenTambah';
import Devices from './app/pages/Device';
import HomePage from './app/pages/HomePage';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator
    initialRouteName="HomePage">
    <Stack.Screen name="HomePage" component={HomePage}/>
  </Stack.Navigator>
  );
}

function DevicesScreen() {
  return (
    <Stack.Navigator
    initialRouteName="Device">
    <Stack.Screen name="Device" component={Devices}/>
  </Stack.Navigator>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  )
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

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Devices" component={DevicesScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

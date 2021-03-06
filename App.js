/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { } from 'react';
import {
  StyleSheet,
  View,
  StatusBar 
} from 'react-native';
import {Buffer} from 'buffer';

import Routes from './app/Routes';
global.Buffer = Buffer;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});


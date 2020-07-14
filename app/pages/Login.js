import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const axios = require('axios')

const api = axios.create({
  baseURL: 'http://iotcloud.tujuhlangit.id:8080',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default function Login() {

  const [state, setState] = useState({
    username: '',
    password: '',
  })



  const login = async () => {
    try {
      const response = await api.post('/api/auth/login', {
        username: state.username,
        password: state.password
      });
      const token = response.data.token
      try{
        await AsyncStorage.setItem('@token_user', token)
      }catch(e){
        console.log(e);
      }
      console.log("User Token : ");
      console.log(token);
      // getUserInfo(token)
    } catch (error) {
      alert(error);
      console.error(error.Error);
    }
  }


  return (
    <View style={styles.container}>
      <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        autoFocus={true}
        placeholder="Username"
        placeholderTextColor="#56C9FB"
        selectionColor="#000000"
        keyboardType="email-address"
        onChangeText={(data) => setState((oldState) => ({ ...oldState, username: data }))}
      />
      <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Password"
        returnKeyType="done"
        secureTextEntry={true}
        placeholderTextColor="#56C9FB"
        onChangeText={(data) => setState((oldState) => ({ ...oldState, password: data }))}
      />
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    height: 40,
    backgroundColor: '#ffffff',
    borderColor: '#56C9FB',
    borderWidth: 3,
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#56C9FB',
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#00b0eb',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: "bold"
  }
});
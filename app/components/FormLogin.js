import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const axios = require('axios')

const api = axios.create({
    baseURL: 'http://iotcloud.tujuhlangit.id:8080',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default class Logo extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
    }
  }
  mainpage(){
      Actions.mainpage()
  }

  login(){
  
    try {
      const response = api.post('/api/auth/login',{
          username : this.state.username,
          password: this.state.password
      });
      const token = response.data.token
      console.log("User Token : ");
      console.log(token);
      getUserInfo(token)
    } catch (error) {
      alert(error);
        console.error(error.Error);
    }
  }
	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)'
              autoFocus={true}
              placeholder="Username"
              placeholderTextColor = "#56C9FB"
              selectionColor="#000000"
              keyboardType="email-address"
              onChangeText={ (text) => this.setState({username:text}) }
              value={this.state.username}
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              returnKeyType="done"
              secureTextEntry={true}
              placeholderTextColor = "#56C9FB"
              onChangeText={ (text) => this.setState({password:text}) }
              value={this.state.password}
              />  
           <TouchableOpacity onPress={this.login} style={styles.button}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    height:40,
    backgroundColor:'#ffffff',
    borderColor: '#56C9FB',
    borderWidth: 3,
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#56C9FB',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#00b0eb',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 10
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
    fontWeight: "bold"
  }
  
});
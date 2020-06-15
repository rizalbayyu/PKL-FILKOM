import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {

	signup() {
		Actions.signup()
	}

	render() {
		return(
			<View style={styles.container}>
				<Form type="Login"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Sign up</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row',
    marginBottom:'5%'
  },
  signupText: {
  	color:'#5c5c5c',
    fontSize:15,
  },
  signupButton: {
  	color:'#000000',
  	fontSize:15,
  	fontWeight:'500'
  }
});
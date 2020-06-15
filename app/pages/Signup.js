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

export default class Signup extends Component<{}> {

  goBack() {
      Actions.pop();
  }

	render() {
		return(
			<View style={styles.container}>

				<Form type="Sign up"/>
				<View style={styles.loginTextCont}>
					<Text style={styles.loginText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.loginButton}> Login</Text></TouchableOpacity>
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
  loginTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row',
    marginBottom:'5%'
  },
  loginText: {
  	color:'#5c5c5c',
  	fontSize:15
  },
  loginButton: {
  	color:'#000000',
  	fontSize:15,
  	fontWeight:'500'
  }
});
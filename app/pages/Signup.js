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

				<Form type="Signup"/>
				<View style={styles.signinTextCont}>
					<Text style={styles.signinText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signinButton}> Sign in</Text></TouchableOpacity>
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
  signinTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row',
    marginBottom:'5%'
  },
  signinText: {
  	color:'#5c5c5c',
  	fontSize:20
  },
  signinButton: {
  	color:'#000000',
  	fontSize:20,
  	fontWeight:'500'
  }
});
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Form from '../components/FormLogin';

export default class Login extends Component<{}> {

	render() {
		return(
			<View style={styles.container}>
				<Form type="Login"/>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  }
});
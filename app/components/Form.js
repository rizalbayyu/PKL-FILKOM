import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Logo extends Component<{}> {

    mainpage(){
        Actions.mainpage()
    }

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#56C9FB"
              selectionColor="#000000"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#56C9FB"
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity onPress={this.mainpage} style={styles.button}>
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
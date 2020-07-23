import React from 'react';
//import react in our code. 
import { Switch, Text, View, StyleSheet } from 'react-native';
//import all the components we are going to use. 
export default function DetailDevice() {
  //Initial state false for the switch. You can change it to true just to see.
  state = {switchValue:false}
  toggleSwitch = (value) => {
      //onValueChange of the switch this function will be called
      this.setState({switchValue: value})
      //state changes according to switch
   }
  return (
    <View style={styles.container}>
      {/*Text to show the text according to switch condition*/}
      <Text><h1>Device1</h1></Text>
      <Text>Aktuator Device</Text>
      {/*Switch with value set in constructor*/}
      {/*onValueChange will be triggered after switch condition changes*/}
      <Switch
        style={{marginTop:10}, {marginBottom:10}, {marginLeft:5}}
        onValueChange = {this.toggleSwitch}
        value = {this.state.switchValue}/>
      <Text>Description:</Text>
      <Text>Los Illuminados</Text>
    </View>
  );   
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
  }
});
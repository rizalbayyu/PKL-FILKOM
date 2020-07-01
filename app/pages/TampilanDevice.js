import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class TampilanDevice extends Component<{}>{
  tambahdevice(){
    Actions.tambahdevice()
  }
  listdevice(){
    Actions.tambahdeviceterpilih()
  }
  render(){
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={this.listdevice}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>List Device / Node</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.tambahdevice}>
            <View style={styles.button2}>
              <Text style={styles.buttonText}>Tambah Device</Text>
            </View>
          </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems:'center'
    },

    button: {
        marginTop: 30,
        marginBottom: 30,
        width: 300,
        alignItems: 'center',
        backgroundColor:'#56C9FB'
    },

    button2: {
        marginTop: 30,
        marginBottom: 30,
        width: 300,
        alignItems: 'center',
        backgroundColor:'#56C9FB'
    },

    buttonText: {
      textAlign: 'center',
      fontSize: 25,
      padding: 20,
      color: 'white'
    }
});

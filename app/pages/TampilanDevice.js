import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const Device = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('List Device di klik')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>List Device / Node</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Tambah Device di klik')}>
              <View style={styles.button2}>
                <Text style={styles.buttonText}>Tambah Device</Text>
              </View>
            </TouchableOpacity>
        </View>
    )
};

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
export default Device;

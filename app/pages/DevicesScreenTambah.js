import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const DevicesScreenTambah = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tambahkan device Anda</Text>
            <TouchableOpacity onPress={() => console.log('Tambah device di klik')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Tambah Device</Text>
              </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        alignItems:'center',
        justifyContent :'center',
        
    },

    text: {
        fontSize: 25,
        color:'#56C9FB'
    },

    button: {
        backgroundColor:'#56C9FB',
        width: 100,
        margin: 10
    },

    buttonText: {
      textAlign: 'center',
      fontSize: 15,
      padding: 5,
      color: 'white'
    }
});

export default DevicesScreenTambah;
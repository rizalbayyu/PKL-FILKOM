import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('Device 1')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Device 1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Device 2')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Device 2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Device 3')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Device 3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Device 4')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Device 4</Text>
              </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    button: {
        marginBottom: 30,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#56C9FB',
        borderRadius:40
    },

    buttonText: {
      textAlign: 'center',
      fontSize: 12,
      padding: 10,
      color: 'white'
    }
});

export default Home;
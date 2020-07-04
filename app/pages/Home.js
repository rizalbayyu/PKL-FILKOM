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
            <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-between'}}>
              <TouchableOpacity onPress={() => console.log('Device 1')}>
                <View style={styles.buttonTop}>
                  <Text style={styles.buttonTopText}>Device 1</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Device 2')}>
                <View style={styles.buttonTop}>
                  <Text style={styles.buttonTopText}>Device 2</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Device 3')}>
                <View style={styles.buttonTop}>
                  <Text style={styles.buttonTopText}>Device 3</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Device 4')}>
                <View style={styles.buttonTop}>
                  <Text style={styles.buttonTopText}>Device 4</Text>
                </View>
              </TouchableOpacity>
            </View>
            
            <View style={styles.lineStyle}/>
            <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-evenly'}}>
              <TouchableOpacity onPress={() => console.log('pH')}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>pH</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Suhu')}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Suhu</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-evenly'}}>
              <TouchableOpacity onPress={() => console.log('Kelembaban')}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Kelembaban</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Kedalaman')}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Kedalaman</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'stretch'
    },

    lineStyle: {
      borderWidth: 1,
      borderColor: '#56C9FB',
    },

    buttonTop: {
        marginBottom: 20,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#56C9FB',
        borderRadius:40
    },

    buttonTopText: {
      textAlign: 'center',
      fontSize: 12,
      padding: 10,
      color: 'white'
    },

    button: {
      marginBottom: 30,
      borderColor: '#56C9FB',
      borderWidth: 2,
      height: 120,
      width: 120,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'white'
    },

    buttonText: {
      textAlign: 'center',
      fontSize: 16,
      padding: 10,
      color: '#56C9FB'
    }
});

export default Home;

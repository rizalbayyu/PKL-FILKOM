import React, { Component,useState,Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {Buffer} from 'buffer';
global.Buffer = Buffer;

var mqtt    = require('@taoqf/react-native-mqtt');
var options = {
	protocol: 'mqtts',
	// clientId uniquely identifies client
	// choose any string you wish
	clientId: 'clientId-ATwwDGasfas' 	
};
var client  = mqtt.connect('mqtt://test.mosquitto.org:8081', options);
client.subscribe('irfanmaulanaaaaa/suhu');

function Home() {
  var note;
  client.on('message', function (topic, message) {
    note = message.toString();
    // Updates React state with message 
    setMesg(note);
    console.log(note);
    client.end();
    });

  // Sets default React state 
  const [mesg, setMesg] = useState(<Text>0</Text>);

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

          <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity onPress={() => console.log('pH')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>pH</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Suhu')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Suhu</Text>
                <Text style={styles.buttonText}>{mesg} C</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity onPress={() => console.log('DO')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>DO</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Turbidity')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Turbidity</Text>
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
      marginBottom: 70,
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
      marginBottom: 40,
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

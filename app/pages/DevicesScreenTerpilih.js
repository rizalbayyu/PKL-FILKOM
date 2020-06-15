import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-nimport React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const DevicesScreenTerpilih = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('Device 1 di klik')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Device 1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Device 2 di klik')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Device 2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Device 3 di klik')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Device 3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Device 4 di klik')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Device 4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Device 5 di klik')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Device 5</Text>
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

export default DevicesScreenTerpilih;ative';

const DevicesScreenTerpilih = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('Device 1 di klik')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Device 1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Device 2 di klik')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Device 2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Device 3 di klik')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Device 3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Device 4 di klik')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Device 4</Text>
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
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor:'#56C9FB'
    },

    buttonText: {
      textAlign: 'center',
      fontSize: 20,
      padding: 20,
      color: 'white'
    }
});

export default DevicesScreenTerpilih;
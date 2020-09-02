import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';


export default function listSensor({nama,value,onClick}){
  function diklik(){
    if (nama == "Aktuator") {
      onClick(nama,value)
      console.log("ini aktuator")
    } else {
      onClick(nama,value)
    }
  }
  return (
    <View>
      {/* high order function = mengembalikan data ke home */}
      <TouchableOpacity onPress={() => diklik()}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{nama}</Text>
            <Text style={styles.buttonText}>{value}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
      marginBottom: 40,
      borderColor: '#56C9FB',
      borderWidth: 2,
      height: 150,
      width: 150,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'white'
    },

    buttonText: {
      textAlign: 'center',
      fontSize: 18,
      padding: 10,
      color: '#56C9FB'
    }
});
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';


export default function listSensor(props){
  //object destructuring sesuai props
  // let temp = JSON.stringify(props);
  let temp = [];
  // console.log(props);
  var a = "";
  for (const [key, value] of Object.entries(props)) {
    temp.push(`${value}`)
    // console.log(`${key}: ${value}`)
  }
  console.log(temp)
  // let temp = [];
  // temp = props;
  // console.log(temp);

  
  return (
    <View>
      {/* high order function = mengembalikan data ke home */}
      <TouchableOpacity onPress={() => console.log("tes: "+result)}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>pH</Text>
            <Text style={styles.buttonText}>7</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

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
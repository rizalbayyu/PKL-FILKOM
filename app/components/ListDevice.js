import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';

export default function listDevice(props){
  // console.log(props);
  //object destructuring sesuai props
  let {name,id} = props;
  
  return (
    <View>
      {/* high order function = mengembalikan data ke home */}
      <TouchableOpacity onPress={() => props.onClick(id.id)}>
      <View style={styles.buttonTop}>
        <Text style={styles.buttonTopText}>{name}</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
    }
});
import {Image, StyleSheet, Text, View,Button, TouchableOpacity, Alert, TouchableNativeFeedback, TouchableHighlight, Pressable, SafeAreaView, useColorScheme} from 'react-native';
import React from 'react';

const App = () => {
  const style={
    container :{
      fontSize:20,
      fontFamily: "Arial, sans-serif",
      fontWeight:"bold",
      color:"green",
    }
  }

  return (


    
    <SafeAreaView >
      <Text style={style.container}>GOOD EVENING</Text>
      <Image
      style={{width:430,height:500}}
        source={{
          uri: 'https://images.unsplash.com/photo-1739761613270-a48d0d1190ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }}
      /> 
      <Button title="press me"></Button>
      <TouchableHighlight style={sss.btn} onPress={() =>Alert.alert("button pressesd!!")}>
        <Text>just press</Text>
      </TouchableHighlight>
      <Pressable style={sss.button} onLongPress={() =>Alert.alert("great")}>
        <Text>do press</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default App;

const sss = StyleSheet.create({
  container:{
    padding:10,
    gap:10,
    width:"100%",
    height:"100%",
    backgroundColor:"black"
  },
  button:{
    padding:15,
    backgroundColor:"purple",
  },
  btn:{
    padding:10,
    borderWidth:4,
    borderColor:"white",
    marginTop:20,
    borderRadius:15,
    backgroundColor:"pink",
    width:"30%",
  }

 
});

import { Text, View, StyleSheet, Platform } from "react-native";
import React from 'react';
export default function Header() {
  return (
    <View style = {styles.contanier}>
      <Text>hello</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  contanier:{
    backgroundColor:'red',
    width:'100%',
    height:25
  }
})

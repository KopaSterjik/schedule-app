import { Text, View, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import List from "../components/List";
import ListItem from "../components/List";
export default function Main() {
  return (
    <View>
      <Header />
      <ListItem />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {},
});

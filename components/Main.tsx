import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Selector from "../components/Selector";
import ListItem from "./List";
export default function Main() {
  return (
    <View style={styles.main}>
      <Header />
      <Selector />
      <ListItem />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#FFFCF6",
  },
});

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import ListItem from "./List";
import { Text } from "@react-navigation/elements";
export default function Main() {
  const [user, setUser] = useState("Яна");
  return (
    <View style={styles.main}>
      <ListItem />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#FFFCF6",
  },
});

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "./List";
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

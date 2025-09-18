import React from "react";
import { StyleSheet, View } from "react-native";
import ScheduleItem from "./ScheduleItem";
export default function ListItem() {
  return (
    <View style={styles.main}>
      <ScheduleItem />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    top: 20,
    height: "100%",
  },
});

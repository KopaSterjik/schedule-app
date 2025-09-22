import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ScheduleItem from "./ScheduleItem";
import Selector from "./Selector";
export default function ListItem() {
  const [day, setDay] = useState("пн");
  const [week, setWeek] = useState("первая");
  return (
    <View style={styles.main}>
      <Selector
        onSelect={(d, w) => {
          setDay(d);
          setWeek(w);
        }}
      />
      <ScheduleItem day={day} week={week} />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    top: 30,
    height: "100%",
  },
});

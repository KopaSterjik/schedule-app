import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import ScheduleItem from "./ScheduleItem";
import Selector from "./Selector";
export default function ListItem() {
  const [day, setDay] = useState("пн");
  const [week, setWeek] = useState("первая");
  const [user, setUser] = useState("Яна");
  return (
    <View style={styles.main}>
      <Header onUserChange={setUser} />

      <Selector
        onSelect={(d, w) => {
          setDay(d);
          setWeek(w);
        }}
      />
      <ScheduleItem day={day} week={week} user={user} />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    top: 30,
    height: "100%",
  },
});

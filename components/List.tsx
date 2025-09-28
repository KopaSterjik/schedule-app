import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
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
      <View style={styles.copyright}>
        <Text style={{ fontFamily: "ML" }}>© 2025 Korzhik Stepan, BSUIR.</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    top: 30,
    height: "100%",
  },
  copyright: {
    height: 50,
    backgroundColor: "#FFFCF6",
    borderTopColor: "#000000ff",
    borderTopWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
});

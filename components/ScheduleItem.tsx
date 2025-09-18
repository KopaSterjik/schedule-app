import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import schedule from "../data/scheduleYana.json";
export default function ScheduleItem() {
  const data = schedule["пн"]["первая"];
  const [start, end] = schedule["пн"]["первая"][0].time.split("-");
  const listitem = ({ item }) => (
    <View style={styles.listitem}>
      <View style={styles.contanier}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 20,
          }}>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontFamily: "MB" }}>{start}</Text>
            <Text style={{ fontFamily: "ML" }}>{end}</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontFamily: "MB", flexWrap: "wrap" }}>
              {item.subject}
            </Text>
            <Text>{item.room}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Text>{item.teacher}</Text>
          <Text>{item.type}</Text>
        </View>
      </View>
    </View>
  );
  return <FlatList data={data} renderItem={listitem} />;
}
const styles = StyleSheet.create({
  listitem: {
    top: 20,
    marginBottom: 10,
    backgroundColor: "#d0cacaff",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  contanier: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

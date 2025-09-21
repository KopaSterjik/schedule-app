import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import schedule from "../data/scheduleYana.json";

export default function ScheduleItem() {
  const data = schedule["ср"]["первая"];

  const renderItem = ({ item }) => {
    const [start, end] = item.time.split("-");
    return (
      <View style={styles.listitem}>
        <View style={styles.container}>
          <View style={styles.leftBlock}>
            <Text style={styles.time}>{start}</Text>
            <Text style={styles.time}>{end}</Text>
          </View>
          <View style={styles.centerBlock}>
            <Text
              style={styles.subjecttext}
              numberOfLines={2}
              ellipsizeMode="tail">
              {item.subject}
            </Text>
            <Text>{item.room}</Text>
          </View>
          <View style={styles.rightBlock}>
            <Text>{item.teacher}</Text>
            <Text>{item.type}</Text>
          </View>
        </View>
      </View>
    );
  };

  return <FlatList data={data} renderItem={renderItem} />;
}

const styles = StyleSheet.create({
  listitem: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#038484ff",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftBlock: {
    marginRight: 20,
  },
  centerBlock: {
    flex: 1,
  },
  rightBlock: {
    alignItems: "flex-end",
  },
  time: {
    fontFamily: "MB",
  },
  subjecttext: {
    fontFamily: "MB",
    flexShrink: 1,
    fontSize: 12,
  },
});

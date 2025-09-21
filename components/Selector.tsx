import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function App() {
  const [open, setopen] = useState(false);
  const [value, setvalue] = useState(null);
  const [open2, setopen2] = useState(false);
  const [value2, setvalue2] = useState(null);
  const [items, setitems] = useState([
    { label: "Понедельник", value: "пн" },
    { label: "Вторник", value: "вт" },
    { label: "Среда", value: "ср" },
    { label: "Четверг", value: "чт" },
    { label: "Пятница", value: "пт" },
    { label: "Суббота", value: "сб" },
    { label: "Воскресенье", value: "вс" },
  ]);
  const [items2, setitems2] = useState([
    { label: "Первая", value: "первая" },
    { label: "Вторая", value: "вторая" },
  ]);
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setopen}
        setValue={setvalue}
        setItems={setitems}
        placeholder="Выберите день:"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownMenu}
        zIndex={1000}></DropDownPicker>
      <DropDownPicker
        open={open2}
        value={value2}
        items={items2}
        setOpen={setopen2}
        setValue={setvalue2}
        setItems={setitems2}
        placeholder="Выберите учебную неделю:"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownMenu}
        zIndex={500}></DropDownPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 20,
    flexDirection: "row",
    gap: 10,
    padding: 10,
    flexWrap: "wrap",
    justifyContent: "center",
    left: "25%",
  },
  dropdown: {
    width: "48%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  dropdownMenu: {
    width: "48%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
});

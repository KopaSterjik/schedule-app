import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

type Props = {
  onSelect: (day: string, week: string) => void;
};

export default function Selector({ onSelect }: Props) {
  const [open, setopen] = useState(false);
  const [value, setvalue] = useState<string | null>(null);
  const [open2, setopen2] = useState(false);
  const [value2, setvalue2] = useState<string | null>(null);

  const [items, setitems] = useState([
    { label: "Понедельник", value: "пн" },
    { label: "Вторник", value: "вт" },
    { label: "Среда", value: "ср" },
    { label: "Четверг", value: "чт" },
    { label: "Пятница", value: "пт" },
    { label: "Суббота", value: "сб" },
  ]);
  const [items2, setitems2] = useState([
    { label: "Первая", value: "первая" },
    { label: "Вторая", value: "вторая" },
  ]);

  const handleSelect = (day: string | null, week: string | null) => {
    if (day && week) onSelect(day, week);
  };
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setopen}
        setValue={(val) => {
          setvalue(val);
          handleSelect(val, value2);
        }}
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
        setValue={(val) => {
          setvalue2(val);
          handleSelect(value, val);
        }}
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

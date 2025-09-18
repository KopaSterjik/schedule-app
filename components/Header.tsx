import {
  Text,
  View,
  StyleSheet,
  Platform,
  Touchable,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import ListItem from "./ListItem";
export default function Header() {
  const [selected, setselected] = useState("Яна");
  const [visible, setvisible] = useState(false);

  const options = ["Яна", "Ксения", "Алина"];

  const handleselect = (option: string) => {
    setselected(option);
    setvisible(false);
  };

  return (
    <View style={styles.contanier}>
      <View style={styles.flexcontanier}>
        <Text style={{ fontSize: 34 }}>10114122</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setvisible(true)}>
          <Text style={styles.buttontext}>{selected}</Text>
        </TouchableOpacity>
        <Modal transparent visible={visible} animationType="fade">
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => setvisible(false)}>
            <View style={styles.list}>
              <FlatList
                data={options}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.listitem}
                    onPress={() => handleselect(item)}>
                    <Text style={styles.listitemtext}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contanier: {
    top: 10,
    width: "100%",
    height: 50,
    backgroundColor: "red",
  },
  flexcontanier: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {},
  buttontext: {},
  overlay: {
    flex: 1,
    justifyContent: "center",
  },
  list: {},
  listitem: {},
  listitemtext: {},
});

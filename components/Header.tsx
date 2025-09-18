import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
        <Image
          style={styles.image}
          source={require("../assets/images/Unknown.png")}
        />
        <Text style={{ fontSize: 29 }}>10114122</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setvisible(true)}>
          <Ionicons style={{ fontSize: 20 }} name="people-outline">
            {selected}
          </Ionicons>
        </TouchableOpacity>
        <Modal transparent visible={visible} animationType="fade">
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => setvisible(false)}>
            <View style={styles.list}>
              <FlatList
                data={options}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleselect(item)}>
                    <Ionicons
                      style={styles.listitemtext}
                      name="accessibility-outline">
                      {item}
                    </Ionicons>
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
  },
  flexcontanier: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  button: {
    justifyContent: "space-around",
  },
  buttontext: {},
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: "50%",
  },
  listitemtext: {
    fontSize: 20,
    marginTop: 5,
  },
});

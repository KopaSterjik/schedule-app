import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Main from "../components/Main";
export default function Index() {
  const [font, setFont] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      MB: require("../assets/fonts/Montserrat-Bold.ttf"),
      MT: require("../assets/fonts/Montserrat-Light.ttf"),
    }).then(() => setFont(true));
  }, []);
  if (!font) {
    return null;
  }

  return <Main />;
}
const styles = StyleSheet.create({
  main: {},
});

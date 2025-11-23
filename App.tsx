import React from "react";
import Router from "./Router";
import { View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <StatusBar barStyle="light-content" />
      <Router />
    </View>
  );
}

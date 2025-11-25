import React from "react";
import Router from "./Router";
import { View, StatusBar } from "react-native";
import { HeaderProvider } from "./src/context/HeaderProvider";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <StatusBar barStyle="light-content" />
      <HeaderProvider>
        <Router />
      </HeaderProvider>
    </View>
  );
}

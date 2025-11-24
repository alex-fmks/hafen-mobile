import React from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: "#000" }} />;

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: "#000" }} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const routes = [
  { key: "first", title: "First" },
  { key: "second", title: "Second" },
];

const Menucard: React.FC = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  scrollView: {},
  text: {
    fontSize: 16,
  },
});

export { Menucard };

import React from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
  Image,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import MenuItem from "../components/MenuItem";
import { Hero } from "../components/Hero";
import { HeadlineText } from "../components/Text";

const Home: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Hero>
            <Image
              style={{
                width: "100%",
                height: 200,
                borderRadius: 8,
                marginBottom: 24,
              }}
              source={require("../../assets/images/hafen-index.png")}
            />
          </Hero>
          <HeadlineText name="Willkommen" />
          <Text style={styles.text}></Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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

export { Home };

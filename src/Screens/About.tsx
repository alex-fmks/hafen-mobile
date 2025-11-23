import React from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Hero } from "../components/Hero";

const About: React.FC = () => {
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
              }}
              source={require("../../assets/images/hafen-hero.png")}
            />
          </Hero>
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

export { About };

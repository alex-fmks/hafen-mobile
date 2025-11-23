import React from "react";
import { Text, ScrollView, StyleSheet, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import MenuItem from "../components/MenuItem";
import { Hero } from "../components/Hero";
import { HeadlineText } from "../components/Text";
import { Event } from "../components/Event";

const Home: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Event
            title="Ein Schiff wird kommen"
            description="Ahoi! Ahoi! Ahoi! EIN SCHIFF WIRD KOMMEN - Die schön schwule Schlagernacht im Hafen: 28. November 2025 - 22 Uhr
Mit DJ derMicha (@el_wilke) und Gastgeber Micha de Sube (@michadesube)
--
Tanz mit Liebe, tanz mit uns!
Ahoi und Remmidemmi mit deiner heißgeliebten Hafencrew."
          >
            <Image
              style={{
                width: "100%",
                height: 200,
                borderRadius: 8,
              }}
              source={require("../../assets/images/eswk.png")}
            />
          </Event>
          <Event
            title="Ein Schiff wird kommen"
            description="Ahoi! Ahoi! Ahoi! EIN SCHIFF WIRD KOMMEN - Die schön schwule Schlagernacht im Hafen: 28. November 2025 - 22 Uhr
Mit DJ derMicha (@el_wilke) und Gastgeber Micha de Sube (@michadesube)
--
Tanz mit Liebe, tanz mit uns!
Ahoi und Remmidemmi mit deiner heißgeliebten Hafencrew."
          >
            <Image
              style={{
                width: "100%",
                height: 200,
                borderRadius: 8,
              }}
              source={require("../../assets/images/eswk.png")}
            />
          </Event>
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

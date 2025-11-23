import React from "react";
import { Text, ScrollView, StyleSheet, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Event } from "../components/Event";

const Home: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Event
            title="RIFF RAVE – Premiere im HAFEN!"
            date="Freitag, 21. November 2025"
            intro="Der Freitag wird elektrisch. Neue Party. Neuer Sound. Gleicher HAFEN."
            hosts="DJ Louis Beton schickt euch auf eine Reise durch Techno & House. Dicke Beats, tiefe Basse und elektronische Ekstase. Laser, Nebel, „Riff-Rave!"
            motto="Seid dabei, wenn wir den Freitag neu verkabeln. ⚡️"
          >
            <Image
              style={{
                width: "100%",
                height: 200,
                borderRadius: 8,
              }}
              source={require("../../assets/images/riff-hafen.png")}
            />
          </Event>
          <Event
            title="Ein Schiff wird kommen!"
            date="Freitag, 28. November 2025 ab 22 Uhr"
            intro="Ahoi! Ahoi! Ahoi! EIN SCHIFF WIRD KOMMEN - Die schön schwule Schlagernacht im Hafen!"
            hosts="Mit DJ derMicha (@el_wilke) und Gastgeber Micha de Sube (@michadesube)"
            motto="Tanz mit Liebe, tanz mit uns! Ahoi und Remmidemmi mit deiner heißgeliebten Hafencrew."
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

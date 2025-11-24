import React from "react";
import { Text, ScrollView, StyleSheet, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../components/MenuItem";

const Menucard: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <MenuItem label="Test" onPress={() => Alert.alert("Test")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
  },
  scrollView: {},
  text: {
    fontSize: 16,
  },
});

export { Menucard };

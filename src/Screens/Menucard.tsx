import React from "react";
import { Text, ScrollView, StyleSheet, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../components/MenuItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Router";

const Menucard: React.FC = () => {
  type Nav = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<Nav>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <MenuItem
            label="🍺 Bier vom Fass"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
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

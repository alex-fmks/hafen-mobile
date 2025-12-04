import React from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Alert,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../components/MenuItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Router";

const Menucard: React.FC = () => {
  type Nav = NativeStackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<Nav>();

  const menuItems = [
    "Heisses",
    "Alkoholfreies",
    "Fruchtiges",
    "Bier vom Fass",
    "Flaschenbier",
    "Shots",
    "Shots Eiskalt",
    "Longdrinks",
    "Spritiousen",
    "Rum",
    "Tequila",
    "Aperetif",
    "Anis",
    "Bitter",
    "Likör",
    "Grappa",
    "Wein",
    "Cocktails",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <MenuItem
            label={item}
            onPress={() =>
              navigation.navigate("DrinkCategory", { category: item })
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginRight: 24,
  },
  scrollView: {},
  text: {
    fontSize: 16,
  },
});

export { Menucard };

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
            label="Heisses"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Alkoholfreies"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Fruchtiges"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Bier vom Fass"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Flaschenbier"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Shots"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Shots Eiskalt"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Longdrinks"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Spritiousen"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Rum"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Tequila"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Aperetif"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Anis"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Bitter"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Likör"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Grappa"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Wein"
            onPress={() => navigation.navigate("DrinkCategory")}
          />
          <MenuItem
            label="Cocktails"
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
    marginRight: 24,
  },
  scrollView: {},
  text: {
    fontSize: 16,
  },
});

export { Menucard };

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/Screens/Home";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />
    <Tab.Screen name="About" component={Home} options={{ title: "Über uns" }} />
    <Tab.Screen
      name="Instagram"
      component={Home}
      options={{ title: "Instagram" }}
    />
    <Tab.Screen
      name="Location"
      component={Home}
      options={{ title: "Der Hafen" }}
    />
  </Tab.Navigator>
);

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Instagram"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Location"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

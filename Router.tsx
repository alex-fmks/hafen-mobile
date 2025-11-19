import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/Screens/Home";
import {
  HomeIcon,
  PhotoIcon,
  BuildingStorefrontIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import { About } from "./src/Screens/About";
import { Social } from "./src/Screens/Social";
import { Location } from "./src/Screens/Location";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = <HomeIcon fill={focused ? "#3f1ec1ff" : "gray"} />;
        } else if (route.name === "About") {
          iconName = (
            <BuildingStorefrontIcon fill={focused ? "#3f1ec1ff" : "gray"} />
          );
        } else if (route.name === "Instagram") {
          iconName = <PhotoIcon fill={focused ? "#3f1ec1ff" : "gray"} />;
        } else if (route.name === "Location") {
          iconName = <MapPinIcon fill={focused ? "#3f1ec1ff" : "gray"} />;
        }
        return iconName;
      },
      tabBarActiveTintColor: "#3f1ec1ff",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />
    <Tab.Screen
      name="About"
      component={About}
      options={{ title: "Über uns" }}
    />
    <Tab.Screen
      name="Instagram"
      component={Social}
      options={{ title: "Instagram" }}
    />
    <Tab.Screen
      name="Location"
      component={Location}
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

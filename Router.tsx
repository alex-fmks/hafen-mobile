import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/Screens/Home";
import {
  PhotoIcon,
  BuildingStorefrontIcon,
  MapPinIcon,
  ClipboardIcon,
  CalendarIcon,
} from "react-native-heroicons/solid";
import { About } from "./src/Screens/About";
import { Social } from "./src/Screens/Social";
import { Location } from "./src/Screens/Location";
import { Menucard } from "./src/Screens/Menucard";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = <CalendarIcon fill={focused ? "#ffb515" : "white"} />;
        } else if (route.name === "About") {
          iconName = (
            <BuildingStorefrontIcon fill={focused ? "#ffb515" : "white"} />
          );
        } else if (route.name === "Instagram") {
          iconName = <PhotoIcon fill={focused ? "#ffb515" : "white"} />;
        } else if (route.name === "Menucard") {
          iconName = <ClipboardIcon fill={focused ? "#ffb515" : "white"} />;
        } else if (route.name === "Location") {
          iconName = <MapPinIcon fill={focused ? "#ffb515" : "white"} />;
        }
        return iconName;
      },
      tabBarActiveTintColor: "#ffb515",
      tabBarInactiveTintColor: "white",
      tabBarStyle: {
        backgroundColor: "#000000",
      },
    })}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        title: "Events",
        headerTintColor: "#ffffff",
        headerStyle: { backgroundColor: "#000000" },
      }}
    />
    <Tab.Screen
      name="About"
      component={About}
      options={{
        title: "Über uns",
        headerTintColor: "#ffffff",
        headerStyle: { backgroundColor: "#000000" },
      }}
    />
    <Tab.Screen
      name="Menucard"
      component={Menucard}
      options={{
        title: "Getränkekarte",
        headerTintColor: "#ffffff",
        headerStyle: { backgroundColor: "#000000" },
      }}
    />
    <Tab.Screen
      name="Instagram"
      component={Social}
      options={{
        title: "Instagram",
        headerTintColor: "#ffffff",
        headerStyle: { backgroundColor: "#000000" },
      }}
    />
    <Tab.Screen
      name="Location"
      component={Location}
      options={{
        title: "Der Hafen",
        headerTintColor: "#ffffff",
        headerStyle: { backgroundColor: "#000000" },
      }}
    />
  </Tab.Navigator>
);

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#000000",
  },
};

export default function Router() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Instagram" component={Social} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Menucard" component={Menucard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

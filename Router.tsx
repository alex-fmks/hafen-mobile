import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "./src/Screens/Home";

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export type TabList = {
  Home: undefined;
  About: undefined;
  Location: undefined;
  Events: undefined;
};

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabList>;
  Home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Router() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerLargeTitle: false,
          headerStyle: {
            backgroundColor: "#DE7F07",
          },
          headerTintColor: "#fff",
        }}
      >
        <RootStack.Screen name="Tabs" component={TabNavigator} />
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

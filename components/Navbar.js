import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MedicationScreen from "./screens/MedicationScreen";
import BiometricsScreen from "./screens/BiometricsScreen";
import EmergencyScreen from "./screens/EmergencyScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from "../theme/theme";

const biometricsScreen = "biometrics";
const medicationScreen = "medication";
const emergencyScreen = "emergency";

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      initialRouteName={biometricsScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === medicationScreen) {
            iconName = focused ? "list-circle" : "list-circle-outline";
          } else if (routeName === biometricsScreen) {
            iconName = focused ? "pulse" : "pulse-outline";
          } else if (routeName === emergencyScreen) {
            iconName = focused ? "medical" : "medical-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={35}
              color={color}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 70,
                height: "170%",
                marginBottom: "20%"
              }}
            />
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: theme.navbar,
          height: 85,
          borderTopWidth: 0,
          alignItems: "flex-end"
        },
      })}
    >
      <Tab.Screen name={medicationScreen}>
        {() => <MedicationScreen />}
      </Tab.Screen>
      <Tab.Screen name={biometricsScreen}>
        {() => <BiometricsScreen />}
      </Tab.Screen>
      <Tab.Screen name={emergencyScreen}>
        {() => <EmergencyScreen />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Navbar;

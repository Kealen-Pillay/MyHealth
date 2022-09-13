import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MedicationScreen from "./screens/MedicationScreen";
import BiometricsScreen from "./screens/BiometricsScreen";
import EmergencyScreen from "./screens/EmergencyScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

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
              size={40}
              color={color}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 60,
                height: "170%",
              }}
            />
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#A1ABFF",
          height: 80,
          borderTopWidth: 0,
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

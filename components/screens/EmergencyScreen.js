import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React from "react";
import { theme } from "../../theme/theme";

const EmergencyScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.emergencyHeaderContainer}>
        <Text style={styles.emergencyHeader}>Emergency</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EmergencyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.emergencyBackground,
    width: "100%",
  },
  emergencyHeaderContainer: {
    width: "100%",
    marginTop: "15%",
    paddingLeft: "5%",
    marginBottom: "5%",
  },
  emergencyHeader: {
    fontWeight: "bold",
    color: theme.text,
    fontSize: 50,
  },
});

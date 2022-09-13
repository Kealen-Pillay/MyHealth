import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React from "react";

const MedicationScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>MedicationScreen</Text>
    </KeyboardAvoidingView>
  );
};

export default MedicationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7FD8BE",
    width: "100%",
  },
});

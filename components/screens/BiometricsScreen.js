import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../theme/theme";

const BiometricsScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>BiometricsScreen</Text>
    </KeyboardAvoidingView>
  );
};

export default BiometricsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.background,
    width: "100%",
  },
});

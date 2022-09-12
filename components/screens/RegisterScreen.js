import { StyleSheet, Text, View } from "react-native";
import React from "react";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>RegisterScreen</Text>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

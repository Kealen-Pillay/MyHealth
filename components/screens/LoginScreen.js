import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

const LoginScreen = () => {
  const [patientID, setPatientID] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../images/MyHealthLogo.png")}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7FD8BE",
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

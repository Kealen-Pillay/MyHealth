import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

const LoginScreen = () => {
  const [patientID, setPatientID] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../images/MyHealthLogo.png")}
        />
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.inputFields}
          placeholder="Patient ID"
        ></TextInput>
        <TextInput
          style={styles.inputFields}
          placeholder="Password"
          secureTextEntry
        ></TextInput>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
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
  logoContainer: {
    backgroundColor: "red",
  },
  logo: {
    width: 120,
    height: 120,
  },
  inputsContainer: {
    width: "80%",
    justifyContent: "space-between",
    height: "15%",
    marginTop: "10%",
  },
  inputFields: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 50,
    paddingLeft: 10,
  },
  buttonsContainer: {
    marginTop: "10%",
    width: "80%",
    backgroundColor: "red",
  },
});

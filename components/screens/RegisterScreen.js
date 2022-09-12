import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [patientID, setPatientID] = useState("");

  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../images/MyHealthLogo.png")}
        />
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.inputFields}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        ></TextInput>
        <TextInput
          style={styles.inputFields}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        ></TextInput>
        <TextInput
          style={styles.inputFields}
          placeholder="Patient ID"
          value={patientID}
          onChangeText={(text) => setPatientID(text)}
        ></TextInput>
        <TextInput
          style={styles.inputFields}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <TextInput
          style={styles.inputFields}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        ></TextInput>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.registerButton]}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.miniTextContainer}>
          <Text style={styles.miniText}>Log In Below If You Already Have An Account</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7FD8BE",
    width: "100%",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: "13%",
    marginTop: "10%",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  inputsContainer: {
    width: "80%",
    justifyContent: "space-between",
    height: "40%",
    marginTop: "10%",
    marginBottom: "10%",
  },
  inputFields: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 50,
    paddingLeft: 10,
  },
  buttonsContainer: {
    width: "80%",
    justifyContent: "space-between",
    height: "15%",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  registerButton: {
    backgroundColor: "#F79999",
  },
  loginButton: {
    backgroundColor: "#7280FA",
  },
  miniTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
  },
  miniText: {
    color: "white",
    fontWeight: "bold",
  },
});

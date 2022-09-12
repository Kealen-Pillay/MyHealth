import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginScreen = () => {
  const [patientID, setPatientID] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate("Register");
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
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.loginButton]}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.miniTextContainer}>
          <Text style={styles.miniText}>Register Below If You Don't Have An Account</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
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
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: "13%",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  inputsContainer: {
    width: "80%",
    justifyContent: "space-between",
    height: "15%",
    marginTop: "20%",
    marginBottom: "5%",
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
  loginButton: {
    backgroundColor: "#7280FA",
  },
  registerButton: {
    backgroundColor: "#F79999",
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

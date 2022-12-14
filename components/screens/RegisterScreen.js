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
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { theme } from "../../theme/theme";

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

  const handleRegister = () => {
    navigation.navigate("Biometrics");
    Toast.show({
      type: "success",
      text1: "Successfully Registered",
      visibilityTime: 1500,
      position: "top",
    });
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
          placeholderTextColor={theme.black}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        ></TextInput>
        <TextInput
          style={styles.inputFields}
          placeholder="Last Name"
          placeholderTextColor={theme.black}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        ></TextInput>
        <TextInput
          style={styles.inputFields}
          placeholder="Patient ID"
          placeholderTextColor={theme.black}
          value={patientID}
          onChangeText={(text) => setPatientID(text)}
        ></TextInput>
        <TextInput
          style={styles.inputFields}
          placeholder="Password"
          placeholderTextColor={theme.black}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <TextInput
          style={styles.inputFields}
          placeholder="Confirm Password"
          placeholderTextColor={theme.black}
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        ></TextInput>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.miniTextContainer}>
          <Text style={styles.miniText}>
            Already Have An Account? Log in Below
          </Text>
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
    backgroundColor: theme.background,
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: theme.text,
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
    color: theme.black,
    fontWeight: "bold",
  },
});

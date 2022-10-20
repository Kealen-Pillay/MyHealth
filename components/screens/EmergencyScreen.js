import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { theme } from "../../theme/theme";

const EmergencyScreen = () => {
  const [emergencyMessage, setEmergencyMessage] = useState("Inactive");

  const handleCancel = () => {
    setEmergencyMessage("Inactive");
  };

  const handleCall = () => {
    setEmergencyMessage("Active");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.emergencyHeaderContainer}>
        <Text style={styles.emergencyHeader}>Emergency</Text>
      </View>
      {emergencyMessage === "Inactive" ? (
        <View style={styles.alertContainerSmall}>
          <View style={styles.emergencyTextContainerSmall}>
            <Text style={styles.emergencyText}>Contact Emergency Services</Text>
          </View>
          <View style={styles.buttonContainerSmall}>
            <TouchableOpacity
              style={[styles.callButton, styles.button, { width: "100%" }]}
              onPress={handleCall}
            >
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.alertContainerLarge}>
          <View style={styles.emergencyTextContainerLarge}>
            <Text style={styles.emergencyText}>
              Emergency Services Will Be Contacted In
            </Text>
          </View>
          <View style={styles.countdownContainer}>
            <Text style={styles.countdownText}>5</Text>
          </View>
          <View style={styles.buttonContainerLarge}>
            <TouchableOpacity
              style={[styles.cancelButton, styles.button, { width: "100%" }]}
              onPress={handleCancel}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
    color: theme.header,
    fontSize: 50,
  },
  alertContainerSmall: {
    backgroundColor: theme.darkGrey,
    width: "95%",
    height: "30%",
    borderRadius: 5,
  },
  alertContainerLarge: {
    backgroundColor: theme.darkGrey,
    width: "95%",
    height: "73%",
    borderRadius: 5,
  },
  emergencyTextContainerSmall: {
    height: "60%",
  },
  emergencyTextContainerLarge: {
    height: "30%",
  },
  emergencyText: {
    color: theme.text,
    fontWeight: "bold",
    fontSize: 40,
    paddingLeft: "5%",
    paddingTop: "5%",
  },
  countdownContainer: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
  countdownText: {
    color: theme.text,
    fontWeight: "bold",
    fontSize: 200,
  },
  buttonContainerSmall: {
    flex: 1,
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  buttonContainerLarge: {
    flex: 1,
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "red",
  },
  callButton: {
    backgroundColor: "#34eb52",
  },
  buttonText: {
    color: theme.text,
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    height: "50%",
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { theme } from "../../theme/theme";

const EmergencyScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.emergencyHeaderContainer}>
        <Text style={styles.emergencyHeader}>Emergency</Text>
      </View>
      <View style={styles.alertContainer}>
        <View style={styles.emergencyTextContainer}>
          <Text style={styles.emergencyText}>
            Emergency Services Will Be Contacted In
          </Text>
        </View>
        <View style={styles.countdownContainer}>
          <Text style={styles.countdownText}>5</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.cancelButton, styles.button]}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.callButton, styles.button]}>
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
        </View>
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
  alertContainer: {
    backgroundColor: theme.darkGrey,
    width: "95%",
    height: "73%",
    borderRadius: 5,
  },
  emergencyTextContainer: {
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
  },
  countdownText: {
    color: theme.text,
    fontWeight: "bold",
    fontSize: 200,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "5%",
    paddingRight: "5%",
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

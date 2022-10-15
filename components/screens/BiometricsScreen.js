import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../theme/theme";

const BiometricsScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftVerticalContainer}>
          <View style={[styles.card, styles.heartCard]}>
            <Text style={styles.cardText}>Heart Rate</Text>
          </View>
          <View style={[styles.card, styles.temperatureCard]}>
            <Text style={styles.cardText}>Temperature</Text>
          </View>
        </View>
        <View style={styles.rightVerticalContainer}>
          <View style={[styles.card, styles.hydrationContainer]}>
            <Text style={styles.cardText}>Hydration</Text>
          </View>
          <View style={[styles.card, styles.bloodPressureContainer]}>
            <Text style={styles.cardText}>Blood Pressure</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={[styles.card, styles.respirationContainer]}>
          <Text style={styles.cardText}>Respiration</Text>
        </View>
        <View style={[styles.card, styles.bloodSugarContainer]}>
          <Text style={styles.cardText}>Blood Sugar</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default BiometricsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.background,
    width: "100%",
    height: "100%",
  },
  card: {
    backgroundColor: theme.darkGrey,
    borderRadius: 10,
  },
  topContainer: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
  },
  leftVerticalContainer: {
    height: "100%",
    width: "50%",
    marginTop: "15%",
    marginLeft: "1%",
  },
  heartCard: {
    width: "100%",
    height: "50%",
  },
  temperatureCard: {
    marginTop: "5%",
    width: "100%",
    height: "30%",
  },
  rightVerticalContainer: {
    height: "100%",
    width: "45%",
    marginTop: "15%",
    marginLeft: "1%",
  },
  hydrationContainer: {
    width: "100%",
    height: "50%",
  },
  bloodPressureContainer: {
    marginTop: "5%",
    width: "100%",
    height: "30%",
  },
  bottomContainer: {
    height: "100%",
    flexDirection: "column",
  },
  respirationContainer: {
    marginLeft: "1%",
    width: "98%",
    height: "20%",
  },
  bloodSugarContainer: {
    marginLeft: "1%",
    marginTop: "1%",
    width: "98%",
    height: "19%",
  },
  cardText: {
    color: theme.text,
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10
  },
});

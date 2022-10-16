import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { theme } from "../../theme/theme";
import Ionicons from "react-native-vector-icons/Ionicons";

const BiometricsScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftVerticalContainer}>
          <View style={[styles.card, styles.heartCard]}>
            <Text style={styles.cardText}>Heart Rate</Text>
            <View
              style={[
                styles.line,
                styles.topContainerLine,
                styles.heartRateLine,
              ]}
            />
            <View style={styles.heartContainer}>
              <Text style={styles.cardText}>90BPM</Text>
              <Image
                style={styles.heartIcon}
                source={require("../../images/heartIcon.png")}
              />
            </View>
          </View>
          <View style={[styles.card, styles.temperatureCard]}>
            <Text style={styles.cardText}>Temperature</Text>
            <View
              style={[
                styles.line,
                styles.topContainerLine,
                styles.temperatureLine,
              ]}
            />
            <View style={styles.temperatureIconContainer}>
              <Image
                style={styles.thermometer}
                source={require("../../images/Thermometer_icon.png")}
              />
              <Text style={styles.temperatureText}>37°C</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightVerticalContainer}>
          <View style={[styles.card, styles.hydrationContainer]}>
            <Text style={styles.cardText}>Hydration</Text>
            <View
              style={[
                styles.line,
                styles.topContainerLine,
                styles.hydrationLine,
              ]}
            />
            <View style={styles.hydrationIconContainer}>
              <Text style={styles.hydrationText}>1.3L</Text>
              <Ionicons name="water-outline" size={120} color="#03dbfc" />
            </View>
          </View>
          <View style={[styles.card, styles.bloodPressureContainer]}>
            <Text style={styles.cardText}>Blood Pressure</Text>
            <View
              style={[
                styles.line,
                styles.topContainerLine,
                styles.bloodPressureLine,
              ]}
            />
            <View style={styles.bloodPressureIconContainer}>
              <Image
                style={styles.bloodPressureIcon}
                source={require("../../images/bloodpressureIcon.png")}
              />
              <Text style={styles.bloodPressureText}>Moderate</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={[styles.card, styles.respirationContainer]}>
          <Text style={styles.cardText}>Respiration</Text>
          <View
            style={[
              styles.line,
              styles.bottomContainerLine,
              styles.respirationLine,
            ]}
          />
        </View>
        <View style={[styles.card, styles.bloodSugarContainer]}>
          <Text style={styles.cardText}>Blood Sugar</Text>
          <View
            style={[
              styles.line,
              styles.bottomContainerLine,
              styles.bloodSugarLine,
            ]}
          />
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
    paddingTop: 10,
  },
  line: {
    borderBottomColor: theme.text,
    borderWidth: 1,
  },
  topContainerLine: {
    marginLeft: "5%",
  },
  bottomContainerLine: {
    marginLeft: "3%",
  },
  heartRateLine: { width: "50%" },
  hydrationLine: { width: "50%" },
  temperatureLine: { width: "60%" },
  bloodPressureLine: { width: "75%" },
  respirationLine: { width: "26%" },
  bloodSugarLine: { width: "28%" },
  heartContainer: {
    flex: 1,
    alignItems: "center",
  },
  heartIcon: {
    height: "60%",
    width: "60%",
    marginTop: "5%",
  },
  hydrationIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
  },
  hydrationText: {
    color: "#00e5ff",
    fontWeight: "bold",
    fontSize: 30,
  },
  thermometer: {
    width: "20%",
    height: "60%",
  },
  temperatureIconContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  temperatureText: {
    color: theme.text,
    fontWeight: "bold",
    fontSize: 45,
  },
  bloodPressureIcon: {
    height: "60%",
    width: "40%",
  },
  bloodPressureIconContainer: {
    flexDirection: "row",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "5%",
  },
  bloodPressureText: {
    color: theme.text,
    fontWeight: "bold",
    fontSize: 25,
  },
});

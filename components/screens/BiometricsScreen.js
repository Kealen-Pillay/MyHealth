import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../theme/theme";

const BiometricsScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.leftVerticalContainer}>
        <View style={[styles.card, styles.heartCard]}></View>
        <View style={[styles.card, styles.temperatureCard]}></View>
      </View>
      <View style={styles.rightVerticalContainer}></View>

      <View style={styles.bottomContainer}></View>
    </KeyboardAvoidingView>
  );
};

export default BiometricsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    width: "100%",
  },
  card: {
    backgroundColor: theme.darkGrey,
    borderRadius: 10,
  },
  leftVerticalContainer: {
    height: "50%",
    width: "50%",
    marginTop: "15%",
    marginLeft: "5%",
  },
  heartCard: {
    width: "100%",
    height: "60%",
  },
  temperatureCard: {
    marginTop: "10%",
    width: "100%",
    height: "30%"
  }
});

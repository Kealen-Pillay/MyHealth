import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";

const MedicationScreen = () => {
  const medicationList = [
    {
      id: 1,
      medicationName: "Ibuprofen",
      dosage: "2 Tablets",
    },
    {
      id: 2,
      medicationName: "Paracetomol",
      dosage: "2 Tablets",
    },
    {
      id: 3,
      medicationName: "Antibiotics",
      dosage: "2 Tablets",
    },
    {
      id: 4,
      medicationName: "Panadol",
      dosage: "2 Tablets",
    },
    {
      id: 5,
      medicationName: "Vitamins",
      dosage: "2 Tablets",
    },
  ];
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.medicationHeaderContainer}>
        <Text style={styles.medicationHeader}>Medication</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {medicationList.map((medication) => (
          <View id={medication.id} style={styles.medicationItem}>
            <Text>{medication.medicationName}</Text>
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MedicationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#7FD8BE",
    width: "100%",
  },
  medicationHeaderContainer: {
    width: "100%",
    marginTop: "15%",
    paddingLeft: "5%",
  },
  medicationHeader: {
    fontWeight: "bold",
    color: "white",
    fontSize: 50,
  },
  scrollView: {
    backgroundColor: "red",
    width: "90%",
  },
  medicationItem: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "white",
    height: 70,
    borderColor: "black",
    marginBottom: "5%",
  },
});

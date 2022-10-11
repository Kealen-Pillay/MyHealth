import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { theme } from "../../theme/theme";

const MedicationScreen = () => {
  const medicationList = [
    {
      id: 1,
      medicationName: "Ibuprofen",
      dosage: "2 Tablets",
    },
    {
      id: 2,
      medicationName: "Paracetamol",
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
    {
      id: 6,
      medicationName: "Vitamins",
      dosage: "2 Tablets",
    },
    {
      id: 7,
      medicationName: "Vitamins",
      dosage: "2 Tablets",
    },
    {
      id: 8,
      medicationName: "Vitamins",
      dosage: "2 Tablets",
    },
    {
      id: 9,
      medicationName: "Vitamins",
      dosage: "2 Tablets",
    },
    {
      id: 10,
      medicationName: "Vitamins",
      dosage: "2 Tablets",
    },
    {
      id: 11,
      medicationName: "Vitamins",
      dosage: "2 Tablets",
    },
  ];
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.medicationHeaderContainer}>
        <Text style={styles.medicationHeader}>Medication</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {medicationList.map((medication) => (
          <TouchableOpacity>
            <View id={medication.id} style={styles.medicationItem}>
              <Text style={styles.medicationText}>
                {medication.medicationName}
              </Text>
              <Text style={styles.dosageText}>{medication.dosage}</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: theme.background,
    width: "100%",
  },
  medicationHeaderContainer: {
    width: "100%",
    marginTop: "15%",
    paddingLeft: "5%",
    marginBottom: "5%",
  },
  medicationHeader: {
    fontWeight: "bold",
    color: theme.text,
    fontSize: 50,
  },
  scrollView: {
    flex: 1,
    width: "90%",
    marginBottom: "20%",
  },
  medicationItem: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "white",
    height: 70,
    borderColor: "black",
    marginBottom: "5%",
    flex: 1,
    justifyContent: "center",
    paddingLeft: "5%",
    borderColor: "black",
    borderWidth: 1,
  },
  medicationText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  dosageText: {
    fontSize: 15,
  },
});

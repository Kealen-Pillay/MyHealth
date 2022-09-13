import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const EmergencyScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>EmergencyScreen</Text>
    </KeyboardAvoidingView>
  )
}

export default EmergencyScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7FD8BE",
        width: "100%",
      },
})
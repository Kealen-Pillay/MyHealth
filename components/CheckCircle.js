import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const CheckCircle = () => {
  const [isTicked, setIsTicked] = useState(false);

  const handleCheck = () => {
    setIsTicked(!isTicked);
  };

  return (
    <>
      {!isTicked ? (
        <TouchableOpacity onPress={handleCheck}>
          <Ionicons name="ellipse-outline" size={40} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleCheck}>
          <Ionicons name="checkmark-circle-outline" size={40} color="green"/>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CheckCircle;

const styles = StyleSheet.create({});

import React from "react";
import { Text } from "react-native";
import { View } from "../../../components/Themed";
import { LoadingSpinnerStyles } from "./LoadingSpinnerStyles";

const LoadingSpinner = () => {
  return (
    <View style={LoadingSpinnerStyles.loadingContainer}>
      <Text>LOADING ... </Text>
    </View>
  );
};

export default LoadingSpinner;

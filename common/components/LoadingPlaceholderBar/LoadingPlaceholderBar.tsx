import React from "react";
import { View } from "react-native";
import { colors } from "../../style/colors";

interface loadingPlaceHolderBarProps {
  height: number;
  width: number;
}

const LoadingPlaceholderBar = (props: loadingPlaceHolderBarProps) => {
  const { width, height } = props;

  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: colors.grey100,
        borderRadius: 4,
      }}
    />
  );
};

export default LoadingPlaceholderBar;

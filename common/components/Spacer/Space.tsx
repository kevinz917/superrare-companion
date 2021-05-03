import React from "react";
import { View } from "react-native";

const pxForSpacerSize: Record<string, number> = {
  xsmall: 4,
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 30,
};

interface spacerOwnProps {
  size: string;
}

const Spacer = (props: spacerOwnProps) => {
  const { size } = props;

  return <View style={{ height: pxForSpacerSize[size] }} />;
};

export default Spacer;

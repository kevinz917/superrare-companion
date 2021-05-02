import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const shadows = StyleSheet.create({
  shadow300: {
    shadowColor: colors.grey600,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});

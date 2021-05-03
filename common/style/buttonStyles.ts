import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const buttonStyles = StyleSheet.create({
  secondary: {
    color: colors.grey600,
    fontSize: 16,
    borderColor: colors.grey200,
    borderWidth: 2,
    borderRadius: 6,
    alignSelf: "flex-start",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

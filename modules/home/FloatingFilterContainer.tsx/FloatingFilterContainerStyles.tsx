import { StyleSheet } from "react-native";
import { colors } from "../../../common/style/colors";

export const FloatingContainerStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 24,
    right: 16,
    width: 60,
    height: 60,
    backgroundColor: colors.grey000,
    color: colors.grey600,
    borderRadius: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

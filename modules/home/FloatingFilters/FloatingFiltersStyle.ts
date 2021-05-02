import { StyleSheet } from "react-native";
import { colors } from "../../../common/style/colors";

export const FloatingFiltersStyle = StyleSheet.create({
  floatingFiltersContainer: {
    width: 150,
    position: "absolute",
    bottom: 75,
    right: 0,
    borderRadius: 12,
    overflow: "hidden",
  },

  filterRowButton: {
    height: 40,
    paddingLeft: 16,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

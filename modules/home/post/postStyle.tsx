import { StyleSheet } from "react-native";
import { colors } from "../../../common/style/colors";

export const postStyle = StyleSheet.create({
  postOverallContainer: {
    marginBottom: 30,
  },
  headerTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  headerTextContainerRow: {
    display: "flex",
    flexDirection: "row",
  },
  postHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: colors.grey000,
  },
  profilePictureContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 12,
    resizeMode: "contain",
  },
  mainImageContainer: {
    width: "100%",
    height: 400,
    marginBottom: 20,
    resizeMode: "cover",
  },
  postBottomContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
});

import { StyleSheet } from "react-native";

export const postStyle = StyleSheet.create({
  postOverallContainer: {
    // marginTop: 20,
    marginBottom: 30,
  },
  postHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  profilePictureContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 12,
  },
  mainImageContainer: {
    width: "100%",
    height: 400,
    marginBottom: 20,
  },
  postBottomContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 12,
  },
});

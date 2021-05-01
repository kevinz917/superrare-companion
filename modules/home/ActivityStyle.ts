import { StyleSheet } from "react-native";

export const activityStyles = StyleSheet.create({
  pageContainer: {
    width: "100%",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  activityLoadingContainer: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
  },
});

export const loadingStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  hero: {
    width: 200,
    height: 40,
    marginBottom: 20,
  },
});

import { StyleSheet } from "react-native";
import Colors from "./colors";

export const globalStyles = StyleSheet.create({
  // global container
  container: {
    flex: 1,
    padding: 20,
  },
  // global error
  error: {
    fontSize: 18,
    color: Colors.textError,
    textAlign: "center",
    marginTop: 20,
  },
});

import React from "react";
import { Ionicons } from "react-native-vector-icons"; // react native vectors icons
import { StyleSheet, TouchableOpacity, Text, Dimensions, Platform } from "react-native";
import Colors from "../styles/colors"; // colors

const { width, height } = Dimensions.get("window");

const BackButton = ({ navigation }) => {
  // navigate to back
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}
    >
      {/* arrow-back */}
      <Ionicons name="arrow-back" size={width * 0.08} color={Colors.primary} />
      {/* text */}
      <Text style={styles.backText}>Go Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;

// Styles
const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? height * 0.05 : height * 0.03, 
    paddingHorizontal: width * 0.05, 
  },
  backText: {
    marginLeft: width * 0.03, 
    fontSize: width * 0.05,
    color: Colors.primary,
    fontWeight: "500", 
  },
});

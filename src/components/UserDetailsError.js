import React from "react";
import { View, Text, Dimensions } from "react-native";
import { globalStyles } from "../styles/globalStyles"; // global styles

const { width, height } = Dimensions.get("window");

const UserDetailsError = () => {
  return (
    <View style={globalStyles.container}>
      {/* Error text */}
      <Text style={[globalStyles.error, styles.errorText]}>
        User details not available
      </Text>
    </View>
  );
};

export default UserDetailsError;

const styles = {
  errorText: {
    fontSize: width * 0.05, 
    textAlign: "center", 
    paddingHorizontal: width * 0.05,
  },
};

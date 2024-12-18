import React from "react";
import { ActivityIndicator } from "react-native";
import Colors from "../styles/colors";

export const Spinner = () => {
  return <ActivityIndicator color={Colors.loader} size={30} />;
};

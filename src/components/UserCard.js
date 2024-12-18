import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Colors from "../styles/colors"; // colors

const { width, height } = Dimensions.get("window");

const UserCard = ({ name, email, id }) => {
  return (
    <View style={styles.card}>
      {/* Profile image */}
      <Image
        source={{ uri: `https://picsum.photos/seed/${id}/50` }}
        style={styles.profileImage}
      />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userEmail}>{email}</Text>
      </View>
    </View>
  );
};

export default UserCard;

// Styles
const styles = StyleSheet.create({
  card: {
    marginBottom: height * 0.02,
    marginTop: height * 0.02,
    flexDirection: "row",
    padding: width * 0.04, 
    borderBottomWidth: 1,
    borderColor: Colors.borderColor,
    alignItems: "center",
  },
  profileImage: {
    width: width * 0.12, 
    height: width * 0.12, 
    borderRadius: width * 0.06, 
    marginRight: width * 0.04, 
    borderWidth: 0.6,
    borderColor: Colors.imageBorder,
  },
  userInfo: {
    justifyContent: "center",
  },
  userName: {
    fontSize: width * 0.05, 
    fontWeight: "bold",
  },
  userEmail: {
    color: Colors.textGray,
    fontWeight: "600",
    fontSize: width * 0.04, 
  },
});

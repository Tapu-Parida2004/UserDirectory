import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, Platform } from "react-native";
import BackButton from "../components/BackButton";
import UserDetailsError from "../components/UserDetailsError";
import Colors from "../styles/colors"; // colors
import { globalStyles } from "../styles/globalStyles"; // global styles

const { width, height } = Dimensions.get("window");

const UserDetailsScreen = ({ route, navigation }) => {
  const { user } = route.params || {};
  // User Details error view
  if (!user) {
    return <UserDetailsError />;
  }
  // Destructuring ...
  const {
    id,
    name,
    email,
    address: { street, city, zipcode },
    company,
  } = user;

  return (
    <View style={globalStyles.container}>
      {/* picsum.photos image */}
      <Image
        source={{ uri: `https://picsum.photos/seed/${id}/200` }}
        style={styles.image}
      />
      {/* Text name, email, address and company */}
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <Text style={styles.text}>
        Address: {street}, {city}, {zipcode}
      </Text>
      <Text style={styles.text}>Company: {company.name}</Text>

      {/* Custom Button */}
      <BackButton navigation={navigation} />
    </View>
  );
};

export default UserDetailsScreen;

// Styles
const styles = StyleSheet.create({
  image: {
    width: width * 0.3,
    height: width * 0.3,
    margin:'auto',
    borderRadius: width * 0.05, 
    marginTop: Platform.OS === "ios" ? height * 0.03 : height * 0.02, 
    marginBottom: height * 0.02,
    borderWidth: 0.5,
    borderColor: Colors.imageBorder,
  },
  title: {
    fontSize: width * 0.05, 
    fontWeight: "bold",
    marginBottom: height * 0.01,
    textAlign: "center",
  },
  text: {
    fontSize: width * 0.04, 
    color: Colors.textSecondary,
    marginBottom: height * 0.01,
    textAlign: "center", 
  },
});

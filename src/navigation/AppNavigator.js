import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserListScreen from "../screens/UserListScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";
import Colors from "../styles/colors"; // colors

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        animation: "scale_from_center",
        headerTintColor: Colors.primary,
        headerTitleAlign: "center",
      }}
    >
      {/* User list page*/}
      <Stack.Screen
        name="UserList"
        component={UserListScreen}
        options={{ title: "User List" }}
      />
      {/* User details page */}
      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{
          title: "User Details",
          gestureEnabled: true, // gesture
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default AppNavigator;

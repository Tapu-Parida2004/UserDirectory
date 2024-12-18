import React from "react";
import { TextInput, View } from "react-native";
import { searchUsers } from "../utils/helpers";
import Colors from "../styles/colors"; //colors

const SearchBar = ({ setFilteredUsers, allUsers, setIsSearching }) => {
  return (
    <View>
      {/* Search text */}
      <TextInput
        style={{ color: Colors.searchText }}
        placeholder="Search users..."
        onChangeText={(text) => {
          searchUsers(text, setFilteredUsers, allUsers);
          setIsSearching(true)
        }}
      />
    </View>
  );
};

export default SearchBar;

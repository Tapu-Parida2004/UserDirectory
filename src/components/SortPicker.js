import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { sortUsers } from "../utils/helpers";
import Colors from "../styles/colors"; //colors

const SortPicker = ({ filteredUsers, setFilteredUsers }) => {
  const [sortOption, setSortOption] = useState("");
  // Sort users
  useEffect(() => {
    const sorted = sortUsers(filteredUsers, sortOption);
    setFilteredUsers(sorted);
  }, [sortOption]);

  return (
    <Picker
      selectedValue={sortOption}
      onValueChange={(value) => setSortOption(value)}
      style={{
        width: "40%",
        height: 50,
        fontWeight: "500",
        backgroundColor: Colors.btnBackground,
        borderRadius: 10,
        color:Colors.primary ,
      }}
    >
      <Picker.Item label="Sort by name" value="name" />
      <Picker.Item label="Sort by email" value="email" />
    </Picker>
  );
};

export default SortPicker;

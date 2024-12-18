import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { fetchUsers } from "../api/useApi";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import SortPicker from "../components/SortPicker";
import { Spinner } from "../components/Spinner";
import Colors from "../styles/colors";
import { globalStyles } from "../styles/globalStyles";

const { width, height } = Dimensions.get("window");

const UserListScreen = ({ navigation }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const [hasMoreUsers, setHasMoreUsers] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const newUsers = await fetchUsers();
        setAllUsers(newUsers);
        setFilteredUsers(newUsers);
      } catch (err) {
        setError("Unable to fetch users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const initialItemRender = 7;
    const value = initialItemRender + 1 * page;
    const users = allUsers?.slice(0, value);

    if (users.length >= allUsers.length) {
      setHasMoreUsers(false);
    } else {
      setHasMoreUsers(true);
    }
    if (!isSearching) {
      setFilteredUsers(users);
    }
  }, [page, allUsers]);

  if (error) {
    return (
      <View style={[globalStyles.container, styles.centered]}>
        <Text style={globalStyles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <View style={styles.sortAndSearch}>
        <SearchBar
          allUsers={allUsers}
          setFilteredUsers={setFilteredUsers}
          setIsSearching={setIsSearching}
        />
        <SortPicker
          filteredUsers={filteredUsers}
          setFilteredUsers={setFilteredUsers}
        />
      </View>
      {loading ? (
        <Spinner />
      ) : (
        <FlatList
          data={filteredUsers}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("UserDetails", { user: item });
              }}
            >
              <UserCard name={item.name} email={item.email} id={item.id} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          onEndReached={() => setPage(page + 1)}
          onEndReachedThreshold={0.2}
          ListFooterComponent={hasMoreUsers ? <Spinner /> : null}
          ListEmptyComponent={() => (
            <View style={[globalStyles.container, styles.centered]}>
              <Text style={styles.emptyUsers}>No users found</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  sortAndSearch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
  },
  emptyUsers: {
    textAlign: "center",
    color: Colors.primary,
    opacity: 0.7,
    fontSize: width * 0.04,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
    padding: Platform.OS === "ios" ? height * 0.02 : height * 0.01,
  },
});

// Sort functionality
export const sortUsers = (filteredUsers, sortOption) => {
  return [...filteredUsers].sort((a, b) => {
    const valueA = a[sortOption]?.toLowerCase() || ""; 
    const valueB = b[sortOption]?.toLowerCase() || "";

    if (valueA < valueB) return -1;
    if (valueA > valueB) return 1;
    return 0;
  });
};

// search by name functionality
export const searchUsers = (query, setFilteredUsers, allUsers) => {
  if (!query) {
    setFilteredUsers(allUsers);
    return;
  }
  // search users by name
  const filtered = allUsers.filter((user) =>
    user.name?.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredUsers(filtered);
};

import { useState, useEffect } from "react";
import Suggestion from "./Suggestion";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [userData, setUserData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const getUserData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data?.users?.length) {
        setUserData(data.users.map((user) => user.firstName));
      } else {
        throw new Error("No users found.");
      }
      setErrorMsg(null);
    } catch (error) {
      setErrorMsg(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handlechange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchInput(query);
    if (query.length > 1) {
      const filteredData =
        userData && userData.length
          ? userData.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleclick = (event) => {
    setShowDropdown(false);
    setSearchInput(event.target.innerText);
    setFilteredUsers([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
      <div className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Search Auto Complete</h1>
        <div className="relative">
          {loading ? (
            <p className="text-center text-gray-400">Loading...</p>
          ) : (
            <input
              value={searchInput}
              name="Search-Users"
              placeholder="Search for users..."
              onChange={handlechange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 placeholder-gray-400"
            />
          )}
          {showDropdown && (
            <Suggestion handleclick={handleclick} data={filteredUsers} />
          )}
        </div>
        {errorMsg && (
          <p className="text-red-500 mt-4 text-center">{`Error: ${errorMsg}`}</p>
        )}
      </div>
    </div>
  );
};

export default SearchAutoComplete;


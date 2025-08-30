import React, { useEffect, useState } from "react";
import UserTable from "../components/user/UserTable";
import Shimmer from "../components/user/Shimmer";
import { useSelector } from "react-redux";
import AddUserForm from "../components/user/AddUserForm";

const UsersPage = () => {
  const userData = useSelector((store) => store.user?.userData);
  const [showForm, setShowForm] = useState(false);

  const [users, setUsers] = useState([]);
  const [copyUsers, setCopyUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setUsers(userData);
    setCopyUsers(userData);
  }, [userData]);

  // handle search functionality

  const handleClick = () => {
    // if search empty
    if (!searchText.trim()) {
      setCopyUsers(users);
      return;
    }

    const filteredName = users.filter((user) =>
      user?.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    );
    setCopyUsers(filteredName);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Users List</h1>
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Search By Name"
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="w-full sm:w-auto px-6 cursor-pointer py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={handleClick}
        >
          Search
        </button>

        {/* Add User form control */}
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md 
             hover:bg-blue-700 hover:shadow-lg 
             transition duration-200 ease-in-out"
        >
          + Add User
        </button>
        {showForm && <AddUserForm onClose={() => setShowForm(false)} />}
      </div>
      {!users.length ? <Shimmer /> : <UserTable users={copyUsers} />}
    </div>
  );
};

export default UsersPage;

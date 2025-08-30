import { useState } from "react";
import { useSelector } from "react-redux";

function UserTable({ users }) {
  const user = useSelector((store) => store.user?.userData);
  const [selectedUser, setSelectedUser] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  //calculate total pages
  const nPages = Math.ceil(users.length / itemsPerPage);

  //get current page data

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  // create array of page numbers
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  const handleClick = (id) => {
    const filtered = user.find((u) => u.id === id);
    setSelectedUser(filtered);
  };

  const closeModal = () => setSelectedUser(null);

  return (
    <div>
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border px-6 py-3 text-left font-semibold">Avatar</th>
            <th className="border px-6 py-3 text-left font-semibold">Name</th>
            <th className="border px-6 py-3 text-left font-semibold">Age</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user,index) => (
            <tr
              key={index}
              className="text-center hover:bg-blue-50 cursor-pointer transition-all"
              onClick={() => handleClick(user?.id)}
            >
              <td className="border px-6 py-4">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-12 h-12 rounded-full mx-auto border border-gray-300"
                />
              </td>
              <td className="border px-6 py-4 text-gray-700 font-medium">
                {user.name}
              </td>
              <td className="border px-6 py-4 text-gray-500">{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination */}

      <div className="flex justify-center gap-2 mt-6">
        <button
          className="px-3 py-1 bg-gray-200 cursor-pointer rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {numbers.map((n) => (
          <button
            key={n}
            onClick={() => setCurrentPage(n)}
            className={`px-3  cursor-pointer py-1 rounded ${
              currentPage === n ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {n}
          </button>
        ))}

        <button
          className="px-3 py-1 cursor-pointer bg-gray-200 rounded disabled:opacity-50"
          disabled={currentPage === nPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

      {/* Popup Modal */}

      {selectedUser && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50 p-4"
          onClick={closeModal}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative transform transition-all duration-300 scale-100">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-red-600 text-xl font-semibold"
            >
              ✖
            </button>
            <div className="flex flex-col items-center text-center">
              <img
                src={selectedUser?.avatar}
                alt="avatar"
                className="w-28 h-28 rounded-full mb-4 border-2 border-gray-200 shadow-sm"
              />
              <h2 className="text-2xl font-bold mb-3 text-gray-800">
                {selectedUser?.name}
              </h2>
              <p className="text-gray-600 mb-1">
                <strong>Gender:</strong> {selectedUser?.gender}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Age:</strong> {selectedUser?.age}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Id:</strong> {selectedUser?.id}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Location:</strong> {selectedUser?.location}
              </p>
              <p className="text-gray-600">
                <strong>createdAT:</strong> {selectedUser?.createdAt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserTable;

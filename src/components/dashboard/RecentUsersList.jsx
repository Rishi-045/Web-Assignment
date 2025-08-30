import React from "react";
import { useSelector } from "react-redux";

const RecentUsersList = () => {
  const users = useSelector((store) => store.user?.userData);
  const recentUsers = [...users]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <>
      <h3 className="text-xl font-semibold mb-4 text-black">
        Recently Joined Users
      </h3>
      <div className="space-y-3 max-h-100 overflow-hidden">
        {recentUsers.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center bg-white rounded-xl shadow p-3 hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <img
                src={user.avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full border border-gray-200"
              />
              <div className="flex flex-col">
                <span className="font-medium text-gray-700">{user.name}</span>
                <span className="text-sm text-gray-500">{user.location}</span>
              </div>
            </div>

            <div className="text-gray-500 text-sm">
              {new Date(user.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentUsersList;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome 👋</h1>

        <div className="space-y-4">
          <Link
            to="/users"
            className="block w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            Users Page
          </Link>

          <Link
            to="/dashboard"
            className="block w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition duration-200"
          >
            Dashboard Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

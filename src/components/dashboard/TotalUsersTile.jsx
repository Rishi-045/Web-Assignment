import React from "react";
import { useSelector } from "react-redux";

const TotalUsersTile = () => {
  const users = useSelector((store) => store.user?.userData);
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-xl mb-2 font-semibold ">Total Users</h3>
      <p className="text-6xl font-bold text-blue-600">{users.length}</p>
    </div>
  );
};

export default TotalUsersTile;

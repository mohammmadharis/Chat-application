import React from "react";
import Search from "./Search.jsx";
import Users from "./Users.jsx";
import Logout from "./Logout.jsx";

const Left = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-black text-gray-300">
      <Search />
      <div className="flex-1 overflow-y-auto">
        <Users />
      </div>
      <Logout />
    </div>
  );
};

export default Left;

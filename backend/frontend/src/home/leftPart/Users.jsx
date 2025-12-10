import React from "react";
import User from "./User";
import UserGetAllUser from "../../context/UserGetAllUser.jsx";

const Users = () => {
  const [allUsers, loading] = UserGetAllUser();


  console.log("all user dikra",allUsers);
  return (
    <div>
      <h1 className=" flex justify-center px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Message
      </h1>

      <div
        className=" flex-1 overflow-auto no-scrollbar overflow-auto"
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      >
        <div
          className="flex-1 overflow-auto no-scrollbar overflow-auto"
          style={{ maxHeight: "calc(92vh - 8vh)" }}
        >
          {Array.isArray(allUsers) && allUsers.map((user, index) => (
         <User key={index} user={user} />
))}
{Array.isArray(allUsers) && allUsers.length === 0 && !loading && (
            <p className="text-center text-gray-300 p-2">No Users Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;

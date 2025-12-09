import React from "react";
import User from "./User";
import UserGetAllUser from "../../context/UserGetAllUser";

const Users = () => {
  const [allUsers, loading] = UserGetAllUser();


  // console.log(allUsers);
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
          {allUsers.map((user, index) => (
         <User key={index} user={user} />
))}
        </div>
      </div>
    </div>
  );
};

export default Users;

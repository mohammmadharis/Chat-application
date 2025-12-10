import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
   const { onlineUsers} = useSocketContext() 
   const isOnline = onlineUsers.includes(user._id.toString())
  const isSelected = selectedConversation?._id === user._id;

  return (
    <div
      className={`hover-bg-slate-600 ${isSelected ? "bg-slate-700" : ""} `}
      onClick={() => setSelectedConversation(user)}
    >
      <div
        className="flex items-center gap-4 px-4 py-4 pl-8 rounded-xl cursor-pointer 
  hover:bg-base-200 transition-all duration-200 mt-2"
      >
        <div className={ `avatar ${isOnline? "avatar-online" : ""}`}>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={selectedConversation?.profilePic || "/mypp.jpeg"} />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-lg font-semibold leading-tight">
            {user.fullName}
          </h1>
          <span className="text-sm opacity-70">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default User;

import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(user._id.toString());
  const isSelected = selectedConversation?._id === user._id;

  return (
    <div
      onClick={() => setSelectedConversation(user)}
      className={`cursor-pointer transition-all duration-200 
      ${isSelected ? "bg-slate-700" : "hover:bg-slate-600"} 
      rounded-xl mt-2`}
    >
      <div className="flex items-center gap-4 px-4 py-4">
        
        {/* Avatar */}
        <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={user.profilePic || "/mypp.jpeg"} alt="Profile" />
          </div>
        </div>

        {/* Name + Email */}
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

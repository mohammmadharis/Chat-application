import React from "react";

const Message = ({ message }) => {
  const authUser = JSON.parse(localStorage.getItem("chatApp"));
  const currentUser = message.senderId === authUser.user._id;

  const chat = currentUser ? "chat-end" : "chat-start";
  const chatColor = currentUser ? "bg-blue-500" : "bg-gray-700";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    
  });

  return (
    <div className="p-4">
      <div className={`chat ${chat}`}>
        <div className={`chat-bubble text-white ${chatColor}`}>
          {message.message}
        </div>
        <div className="chat-footer text-xs text-gray-400">{formattedTime}</div>
      </div>
    </div>
  );
};

export default Message;

import React from "react";

const Message = ({ message }) => {
  const authUser = JSON.parse(localStorage.getItem("chatApp"));
  const currentUser = message.senderId === authUser.user._id;

  const alignment = currentUser ? "justify-end" : "justify-start";
  const bubbleColor = currentUser ? "bg-blue-500" : "bg-gray-700";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${alignment} mb-2 px-2`}>
      <div className={`max-w-xs break-words p-2 rounded-lg text-white ${bubbleColor}`}>
        <div>{message.message}</div>
        <div className="text-xs text-gray-200 mt-1 text-right">{formattedTime}</div>
      </div>
    </div>
  );
};

export default Message;

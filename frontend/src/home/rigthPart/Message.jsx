import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("chatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const chatAlign = itsMe ? "chat-end" : "chat-start";
  const bubbleColor = itsMe ? "bg-blue-600 text-white" : "bg-gray-700 text-white";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="px-3 py-1"> {/* small spacing only */}
      <div className={`chat ${chatAlign}`}>
        <div className={`chat-bubble ${bubbleColor} px-4 py-2`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-60 text-xs text-gray-400">
          {formattedTime}
        </div>
      </div>
    </div>
  );
}

export default Message;

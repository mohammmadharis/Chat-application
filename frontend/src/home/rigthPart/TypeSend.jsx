import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../context/useSendMessage";

const TypeSend = () => {

  const [message, setMessage]  = useState("")
  const  { loading, sendMessages } = useSendMessage()


  const handleSubmit = async (e) => {
    e.preventDefault()
     await sendMessages(message)
     setMessage("")
  }
  return (
  <form action="" onSubmit={handleSubmit}>

      <div className="flex items-center gap-2  border-slate-700 p-4 bg-slate-900 h-[">
      {/* Input */}
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 input  text-gray-800 placeholder-gray-400 text-teal-50 outline-none px-4"
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
      />

      <div>
        <button>
          <IoMdSend size={30} />
        </button>
      </div>
    </div>
  </form>
  );
};

export default TypeSend;

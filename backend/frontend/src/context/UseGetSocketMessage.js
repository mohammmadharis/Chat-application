import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext.jsx";
import useConversation from "../zustand/useConversation.js";
import Sound from "../assets/notification.wav"

const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
     const notification = new Audio(Sound);
      notification.play();
      setMessages([...messages, newMessage]); //
    });
    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, setMessages]);
};
export default useGetSocketMessage;

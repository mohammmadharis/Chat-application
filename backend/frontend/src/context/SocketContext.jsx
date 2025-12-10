import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [authUser] = useAuth();

  useEffect(() => {
    if (!authUser) return;

    const newSocket = io("https://chat-application-acdj.onrender.com", {
      query: { userId: authUser.user._id },
    });

    setSocket(newSocket);

    newSocket.on("getOnlineUsers", (users) => {
      console.log("ONLINE USERS FROM BACKEND:", users);
      setOnlineUsers(users);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

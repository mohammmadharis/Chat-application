import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";
axios.defaults.withCredentials = true;


const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
    
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const res = await axios.get(
            `/api/message/get/${selectedConversation._id}`
          );
          console.log("api res" ,res.data)
          setMessages(res.data);
          setLoading(false);
        } catch (error) {
          console.log("Error in getting Messages", error);
        }
      }
    };
    getMessages();
    // console.log(setMessages)
  }, [selectedConversation, setMessages]);

  return { loading, messages };
};

export default useGetMessage;

import React, { useEffect } from "react";
import ChatUser from "./ChatUser.jsx";
import Messages from "./Messages.jsx";
import TypeSend from "./TypeSend.jsx";
import useConversation from "../../zustand/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col h-screen w-full bg-slate-900 text-gray-300">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <ChatUser />
          <div className="flex-1 overflow-y-auto">
            <Messages />
          </div>
          <TypeSend />
        </>
      )}
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <div className="relative flex-1 flex items-center justify-center">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <h1 className="text-center px-4">
        Welcome{" "}
        <span className="font-semibold text-xl">{authUser.user.fullName}</span>
        <br />
        No chat selected, please start conversation by selecting anyone from your contacts
      </h1>
    </div>
  );
};

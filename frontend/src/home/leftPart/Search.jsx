import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import userGetAllUser from "../../context/UserGetAllUser.jsx";
import useConversation from "../../zustand/useConversation.js";
import toast from "react-hot-toast";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = userGetAllUser();
  const { setSelectedConversation } = useConversation();

  console.log("All users:", allUsers); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const conversation = allUsers.find((user) =>
      user.fullName?.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="h-[10vh] px-6 py-4">
      <form onSubmit={handleSubmit} className="flex space-x-3">
        <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-[80%]">
          <input
            type="text"
            className="grow outline-none bg-transparent"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button type="submit" className="p-2 hover:bg-gray-600 rounded-full duration-300">
          <FaSearch className="text-3xl" />
        </button>
      </form>
    </div>
  );
}

export default Search;

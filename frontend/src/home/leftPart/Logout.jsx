import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/user/logout", {}, { withCredentials: true });

      // Clear user data
      localStorage.removeItem("chatApp");
      Cookies.remove("jwt");

      setLoading(false);

      // Show toast
      toast.success("Logged out successfully");

      // Optional: page reload after 1 second to let toast appear
      setTimeout(() => {
        window.location.reload();
      }, 1000);

    } catch (error) {
      console.log("Error in Logout", error);
      setLoading(false);
      toast.error("Error in logging out");
    }
  };

  return (
    <>
      {/* Toaster component for toast notifications */}
      <Toaster position="top-right" />

      <hr />
      <div className="h-[10vh] bg-transparent flex items-center px-4">
        <button
          className="flex items-center gap-2 p-2 bg-transparent border-none text-white hover:bg-slate-700 rounded-lg transition duration-200"
          onClick={handleLogout}
          disabled={loading}
        >
          <BiLogOutCircle size={28} />
          {loading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </>
  );
}

export default Logout;

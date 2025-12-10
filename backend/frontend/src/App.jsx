import React from "react";
// Components:
import Left from "./home/leftPart/Left"; // इसे अब Sidebar (Chat List) मानेंगे
import Right from "./home/rigthPart/Right"; // इसे अब Main Content (Chat Area) मानेंगे

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [authUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="drawer lg:drawer-open">
                {/* Checkbox for drawer toggle on small screens */}
                <input
                  id="my-drawer-2"
                  type="checkbox"
                  className="drawer-toggle"
                />

                {/* Right Component (Main Chat Area / Content) */}
                <div className="drawer-content flex flex-col items-center justify-center">
                  <Right /> 
                </div>

                {/* Left Component (Sidebar / Chat List) */}
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  {/* Left component */}
                  <ul className="menu w-80 min-h-full bg-black text-base-content">
                    <Left /> 
                  </ul>
                </div>
              </div>
            ) : (
              // If not logged in, navigate to login
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
import React from "react";
// Components:
import Left from "./home/leftPart/Left"; 
import Right from "./home/rigthPart/Right";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [authUser] = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="drawer lg:drawer-open min-h-screen bg-black">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                {/* Right -> MAIN CHAT AREA */}
                <div className="drawer-content flex flex-col">
                  <Right />
                </div>

                {/* Left -> SIDEBAR */}
                <div className="drawer-side">
                  <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                  {/* UL HATAO, DIRECT COMPONENT DO */}
                  <div className="w-80 min-h-full bg-black text-white">
                    <Left />
                  </div>
                </div>
              </div>
            ) : (
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

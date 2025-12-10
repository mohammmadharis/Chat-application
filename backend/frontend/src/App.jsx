import React from "react";
import Left from "./home/leftPart/Left.jsx";
import Right from "./home/rigthPart/Right.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import { useAuth } from "./context/AuthProvider.jsx";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  const [authUser] = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="drawer lg:drawer-open h-screen w-screen">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

              {/* Desktop + Right Content */}
              <div className="drawer-content flex flex-row h-screen w-screen">
                {/* Left Sidebar */}
                <div className="w-80 min-h-full bg-black text-white overflow-auto">
                  <Left />
                </div>

                {/* Right Messages */}
                <div className="flex-1 h-full overflow-auto">
                  <Right />
                </div>
              </div>

              {/* Mobile Drawer */}
              <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              </div>
            </div>
          ) : (
            <Navigate to="/login" />
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
  );
};

export default App;

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
            <div className="drawer lg:drawer-open h-screen">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              {/* Right / Main content */}
              <div className="drawer-content flex flex-row h-screen w-screen">
                <Right className="flex-1 min-h-full overflow-auto" />
              </div>
              {/* Left / Sidebar */}
              <div className="drawer-side w-80">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu w-80 min-h-full bg-black text-white">
                  <Left />
                </ul>
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
  );
};

export default App;

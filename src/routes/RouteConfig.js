import React, { useContext, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  Router,
  useLocation,
} from "react-router-dom";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import { AuthContext } from "../context/AuthContext";
import Dashboard from "../views/Dashboard/Dashboard";
import Game from "../views/Game/Game";
import ProtectedRoutes from "./ProtectedRoutes";
const RouterConfig = () => {
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const { pathname } = location;
    if (pathname === "/") {
      authState.isLoggedIn ? navigate("/dashboard") : navigate("/login");
    } else if (pathname === "/login" && authState.isLoggedIn) {
      navigate("/profile");
    }
  }, [authState, location, navigate]);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/game/:id" element={<Game />}></Route>
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default RouterConfig;

import React, { useContext } from "react";
import { AuthToken } from "../context/AuthToken";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { token } = useContext(AuthToken);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

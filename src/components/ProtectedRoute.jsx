import { useContext } from "react";
import { AuthToken } from "../context/AuthToken";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { token } = useContext(AuthToken);
  console.log("token" + token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

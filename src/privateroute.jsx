import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/authcontext/AuthContext";

const PrivateRoute = ({ children }) => {
  //check if there's access token
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

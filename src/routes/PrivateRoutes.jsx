import React, { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Loading from "../Components/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoutes;

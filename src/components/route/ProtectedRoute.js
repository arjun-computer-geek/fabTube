import { useUser } from "contexts/userContext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoute = () => {
    const { userState: { user } } = useUser()

  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
};
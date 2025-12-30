import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../store/auth-context";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

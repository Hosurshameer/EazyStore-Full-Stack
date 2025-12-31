import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../store/auth-context";
import { Navigate } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  useEffect(() => {
    if (!isAuthenticated && location.pathname !== "/login") {
      alert("You must be logged in to access the checkout page.");
      sessionStorage.setItem("redirectPath", location.pathname);
    }
  }, [isAuthenticated, location.pathname]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

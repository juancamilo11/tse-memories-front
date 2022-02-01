import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import Home from "../pages/home/Home";

const PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return auth?.uid ? <Navigate to="/" element={<Home />} /> : children;
};

export default PublicRoute;

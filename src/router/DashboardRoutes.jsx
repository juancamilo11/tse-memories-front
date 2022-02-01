import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* toDo -> Define the rest of the routes here*/}

      {/* Default route */}
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default DashboardRoutes;

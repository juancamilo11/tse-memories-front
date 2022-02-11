import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/memory/:memoryId" element={<HomePage />} />

      {/* Default route */}
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
};

export default DashboardRoutes;

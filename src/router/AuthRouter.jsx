import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import LoginPage from "../pages/login/LoginPage";

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/auth/login" element={<LoginPage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRouter;

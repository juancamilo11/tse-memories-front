import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { login } from "../actions/authActions";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  const [checkingAuthState, setCheckingAuthState] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.state);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        console.log(user);
        dispatch(
          login(
            user.uid,
            user.displayName,
            user.email,
            user.photoURL,
            user.metadata.creationTime,
            user.metadata.lastSignInTime
          )
        );
      } else {
        setIsLoggedIn(false);
      }
      setCheckingAuthState(false);
    });
  }, []);

  if (checkingAuthState) {
    return <h1>Cargando...</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

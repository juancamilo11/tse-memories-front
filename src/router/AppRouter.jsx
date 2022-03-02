import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { login } from "../actions/authActions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import DashboardRoutes from "./DashboardRoutes";
import Loader from "../components/Loader";
import { startFetchAllUserMemories } from "../actions/memoryActions";

const AppRouter = () => {
  const [checkingAuthState, setCheckingAuthState] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
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
        dispatch(startFetchAllUserMemories(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setCheckingAuthState(false);
    });
  }, []);

  if (checkingAuthState) {
    return <Loader />;
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

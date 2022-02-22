import types from "../types/types";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { finishLoading, startLoading } from "./uiActions";
import { urlBase } from "../environments/environment";
import app from "./../firebase/firebaseConfig";
const auth = getAuth();
const provider = new GoogleAuthProvider();

//Login Action to send to authReducer
export const login = (uid, displayName, email, photoUrl) => ({
  type: types.authLogin,
  payload: { uid, displayName, email, photoUrl },
});

//Logout Action to send to authReducer
export const logout = () => ({
  type: types.authLogout,
});

//We're using thunk Middleware
export const startGoogleLogin = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const firebaseResponse = await signInWithPopup(auth, provider);
      const { uid, displayName, email, photoURL } = firebaseResponse.user;

      const herokuResponse = await fetch(`${urlBase}/post/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: uid,
          name: displayName,
          email,
          urlProfilePhoto: photoURL,
        }),
      });
      const userData = await herokuResponse.json();

      dispatch(login(uid, displayName, email, photoURL));

      dispatch(finishLoading());
    } catch (err) {
      dispatch(finishLoading());
    }
  };
};

//We're using thunk Middleware
export const startLogout = () => {
  return async (dispatch) => {
    await auth.signOut().then(() => {
      dispatch(logout());
    });
  };
};

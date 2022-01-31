import types from "../types/types";
import app from "../firebase/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { finishLoading, startLoading } from "./uiActions";

const auth = getAuth();
const provider = new GoogleAuthProvider();

//Login Action to send to authReducer
export const login = (uid, displayName, email, photoUrl, lastSignInTime) => ({
  type: types.authLogin,
  payload: { uid, displayName, email, photoUrl, lastSignInTime },
});

//Logout Action to send to authReducer
export const logout = () => ({
  type: types.authLogout,
});

//We're using thunk Middleware
export const startGoogleLogin = () => {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          login(
            user.uid,
            user.displayName,
            user.email,
            user.photoURL,
            user.metadata.lastSignInTime
          )
        );
        console.log(user);
        dispatch(finishLoading());
      })
      .catch((err) => {
        dispatch(finishLoading());
        console.log(err);
      });
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

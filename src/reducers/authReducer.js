import types from "../types/types";

/*
//State description

  if(logged) { //Google will provide us this information 
    uid: U893LEID94KE782KES03,
    name: Juan Camilo Cardona Calderón,
    email: juancamilo19997814@gmail.com
    photoUrl: https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c-rg-br100,
    lastSignInTime: 1640235253245 
  }

  if(!logged) -> {} //Empty object (Initial State)
*/

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.displayName,
        email: action.payload.email,
        photoUrl: action.payload.photoUrl,
      };
    case types.authLogout:
      return {};
    default:
      return state;
  }
};

export default authReducer;

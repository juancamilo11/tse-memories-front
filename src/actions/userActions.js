import { urlBase } from "../environments/enviroment";
import { finishLoading, startLoading } from "./uiActions";

export const startSaveUserIfNotExists = (user) => {
  return async () => {
    try {
      const response = await fetch(`${urlBase}/post/user`, {
        method: "POST",
        body: user,
      });
      if (response.ok) {
        const user = await response.json();
        console.log("****************");
        console.log(user);
      } else {
        throw await response.json();
      }
    } catch (err) {
      throw err;
    }
  };
};

export const startFetchUserInfoById = async (userId) => {
  try {
    const response = await fetch(`${urlBase}/get/user/${userId}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (err) {
    throw err;
  }
};

export const startFetchMemoryOwnerInfoByMemoryId = async (ownerId) => {
  try {
    const response = await fetch(`${urlBase}/get/user-owner/${ownerId}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (err) {
    throw err;
  }
};

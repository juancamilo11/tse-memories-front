import { urlBase } from "../environments/enviroment";
import { finishLoading, startLoading } from "./uiActions";

export const startSaveUserIfNotExists = (user) => {
  return async () => {
    try {
      const response = await fetch(`${urlBase}/post/user`, {
        method: "POST",
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const user = await response.json();
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

export const startFetchMemoryOwnerInfoByMemoryId = async (creatorId) => {
  try {
    const response = await fetch(`${urlBase}/get/user-owner/${creatorId}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (err) {
    throw err;
  }
};

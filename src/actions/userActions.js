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

export const startFetchUserById = async (userId) => {
  try {
    const response = await fetch(`${urlBase}/get/user/${userId}`, {
      method: "GET",
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (err) {
    throw err;
  }
};

//userIdList es una lista de Id's de usuario
export const fetchViewersData = async (userIdList) => {
  try {
    const response = await fetch(`${urlBase}/get/users-list`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userIdList),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (err) {
    throw err;
  }
};

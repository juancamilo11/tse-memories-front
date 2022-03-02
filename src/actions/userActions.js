import { urlBase } from "../environments/environment";
import { finishLoading, startLoading } from "./uiActions";

export const startSaveUserIfNotExists = (user) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(`${urlBase}/post/user`, {
        method: "POST",
        body: JSON.stringify(user),
      });
      if (response.ok) {
        dispatch(finishLoading());
        return await response.json();
      } else {
        throw await response.json();
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch(finishLoading());
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

export const fetchViewersData = async (userIdList) => {
  try {
    const response = await fetch(`${urlBase}/get/users-list`, {
      method: "POST",
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

export const sendEmailNotificationForMemorySharing = async (
  memoryId,
  senderName,
  targetEmail
) => {
  try {
    const response = await fetch(
      `${urlBase}/post/send-mail/${
        memoryId || "123" //If the memory is new, id=123
      }/${senderName}/${targetEmail}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (err) {
    throw err;
  }
};

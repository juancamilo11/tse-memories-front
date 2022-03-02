import { urlBase } from "../environments/environment";
import types from "../types/types";
import { startLoading, finishLoading } from "./uiActions";
import { v4 as uuidv4 } from "uuid";
import {
  sweetalertForGenericErrorBuilder,
  sweetalertForMemorySuccessfullyCreatedOrUpdateBuilder,
} from "../helpers/sweetAlertBuilder";

export const activeMemoryToShow = (memoryId, memory) => ({
  type: types.setActiveMemoryToShow,
  payload: { memoryId, ...memory },
});

export const activeMemoryToUpdate = (memoryId, memory) => ({
  type: types.setActiveMemoryToUpdate,
  payload: { memoryId, ...memory },
});

export const activeSearchPanel = () => ({
  type: types.setActiveSearchPanel,
  payload: null,
});

export const activeNothingToShow = () => ({
  type: types.setNothingToShow,
  payload: null,
});

export const activeNewMemory = () => ({
  type: types.setNewMemoryForm,
  payload: null,
});

export const modifyMemory = (memoryId, memory) => ({
  type: types.modifyMemory,
  payload: { memoryId, ...memory },
});

export const deleteMemory = (memoryId, memoriesList) => ({
  type: types.deleteMemory,
  payload: { memoryId, memoriesList },
});

const fetchAllUserMemories = (allUserMemories) => ({
  type: types.fetchAllUserMemories,
  payload: allUserMemories,
});

const fetchAllUserPublicMemories = (allUserPublicMemories) => ({
  type: types.fetchAllUserPublicMemories,
  payload: allUserPublicMemories,
});

const fetchAllUserProtectedMemories = (allUserProtectedMemories) => ({
  type: types.fetchAllUserProtectedMemories,
  payload: allUserProtectedMemories,
});

const fetchAllUserPrivateMemories = (allUserPrivateMemories) => ({
  type: types.fetchAllUserPrivateMemories,
  payload: allUserPrivateMemories,
});

const fetchAllMemoriesSharedWithTheCurrentUser = (
  allMemoriesSharedWithTheUser
) => ({
  type: types.fetchAllMemoriesSharedWithTheUser,
  payload: allMemoriesSharedWithTheUser,
});

const fetchAllSpecificUserMemoriesByEmail = (allUserPublicMemoriesByEmail) => ({
  type: types.fetchAllSpecificUserMemoriesByEmail,
  payload: allUserPublicMemoriesByEmail,
});

const fetchAllMemoriesByNameOrTagname = (allMemoriesByNameOrTagname) => ({
  type: types.fetchAllMemoriesByNameOrTagname,
  payload: allMemoriesByNameOrTagname,
});

export const startFetchAllUserMemories = (userId) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(`${urlBase}/get/all-memories/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const allUserMemories = await response.json();
        const { publicMemories, privateMemories, protectedMemories } =
          allUserMemories;
        dispatch(
          fetchAllUserMemories([
            ...publicMemories,
            ...privateMemories,
            ...protectedMemories,
          ])
        );
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

export const startFetchAllUserPublicMemories = (userId) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(`${urlBase}/get/public-memories/${userId}`);
      if (response.ok) {
        const allUserPublicMemories = await response.json();
        dispatch(fetchAllUserPublicMemories(allUserPublicMemories));
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

export const startFetchAllUserProtectedMemories = (userId) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(
        `${urlBase}/get/protected-memories/${userId}`
      );
      if (response.ok) {
        const allUserProtectedMemories = await response.json();
        dispatch(fetchAllUserProtectedMemories(allUserProtectedMemories));
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

export const startFetchAllUserPrivateMemories = (userId) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(`${urlBase}/get/private-memories/${userId}`);
      if (response.ok) {
        const allUserPrivateMemories = await response.json();
        dispatch(fetchAllUserPrivateMemories(allUserPrivateMemories));
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

export const startFetchAllMemoriesSharedWithTheCurrentUser = (userId) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(`${urlBase}/get/shared-memories/${userId}`);
      if (response.ok) {
        const allMemoriesSharedWithTheUser = await response.json();
        dispatch(
          fetchAllMemoriesSharedWithTheCurrentUser(allMemoriesSharedWithTheUser)
        );
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

export const startFetchAllSpecificUserMemoriesByEmail = (email) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(
        `${urlBase}/get/public-memories/owner-email/${email}` //SOLO LAS PÚBLICAS
      );
      if (response.ok) {
        const allUserPublicMemoriesByEmail = await response.json();
        dispatch(
          fetchAllSpecificUserMemoriesByEmail(allUserPublicMemoriesByEmail)
        );
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

export const startFetchAllMemoriesByNameOrTagname = (nameOrTagName) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(
        `${urlBase}/get/public-memories/name-or-tagname/${nameOrTagName}` //SOLO LAS PÚBLICAS
      );
      if (response.ok) {
        const allMemoriesByNameOrTagname = await response.json();
        dispatch(fetchAllMemoriesByNameOrTagname(allMemoriesByNameOrTagname));
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

const getCurrentDate = () => {
  return new Date().toISOString().split("T")[0];
};

export const startCountMemoryView = (memoryId, userId, visibility) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(
        `${urlBase}/put/${getVisibility(
          visibility
        )}-memory/count-view/${memoryId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, visualizationDate: getCurrentDate() }),
        }
      );
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

export const startDeleteMemory = (uid, memoryId, visibility, memoriesList) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(
        `${urlBase}/delete/${getVisibility(
          visibility
        )}-memory/${uid}/${memoryId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        dispatch(deleteMemory(memoryId, memoriesList));
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

const getVisibility = (visibility) => {
  if (visibility === "privado") {
    return "private";
  } else if (visibility === "publico") {
    return "public";
  } else {
    return "protected";
  }
};

export const startSaveOrUpdateMemory = (memoryInfo, uid) => {
  return async (dispatch) => {
    memoryInfo.creatorId = uid;
    if (memoryInfo.id === "") {
      memoryInfo.id = uuidv4();
    }
    memoryInfo.location = {
      country: memoryInfo.country,
      city: memoryInfo.city,
    };
    const visibility = getVisibility(memoryInfo.visibility);
    try {
      const response = await fetch(`${urlBase}/post/${visibility}-memory`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(memoryInfo),
      });
      if (response.ok) {
        const updatedMemory = await response.json();
        dispatch(activeMemoryToShow(updatedMemory.memoryId, updatedMemory));
        sweetalertForMemorySuccessfullyCreatedOrUpdateBuilder();
        dispatch(startFetchAllUserMemories(uid));
      } else {
        throw await response.json();
      }
    } catch (err) {
      sweetalertForGenericErrorBuilder(
        "Error en la creación/actualización del recuerdo" + err
      );
      throw err;
    }
  };
};

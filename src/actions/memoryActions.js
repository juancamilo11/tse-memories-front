import { urlBase } from "../environments/enviroment";
import types from "../types/types";
import { startLoading, finishLoading } from "./uiActions";
import { v4 as uuidv4 } from "uuid";

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

//modifyMemory sólo actualiza la vida, luego habrá otra acción de
//Actualización para un recuerdo que si atacará el backend
export const modifyMemory = (memoryId, memory) => ({
  type: types.modifyMemory,
  payload: { memoryId, ...memory },
});

export const deleteMemory = (memoryId, memories) => ({
  type: types.deleteMemory,
  payload: { memoryId, memories },
});

const fetchAllUserMemories = (allUserMemories) => ({
  type: types.fetchAllUserMemories,
  payload: allUserMemories,
});

const fetchAllUserPublicMemories = (allUserPublicMemories) => ({
  type: types.fetchAllUserPublicMemories,
  payload: allUserPublicMemories,
  /*[{},
    {},
    {},
    ...,
    {}
    ]
    */
});

const fetchAllUserProtectedMemories = (allUserProtectedMemories) => ({
  type: types.fetchAllUserProtectedMemories,
  payload: allUserProtectedMemories,
  /*[{},
    {},
    {},
    ...,
    {}
    ]
    */
});

const fetchAllUserPrivateMemories = (allUserPrivateMemories) => ({
  type: types.fetchAllUserPrivateMemories,
  payload: allUserPrivateMemories,
  /*[{},
    {},
    {},
    ...,
    {}
    ]
    */
});

const fetchAllMemoriesSharedWithTheCurrentUser = (
  allMemoriesSharedWithTheUser
) => ({
  type: types.fetchAllMemoriesSharedWithTheUser,
  payload: allMemoriesSharedWithTheUser,
  /*[{},
    {},
    {},
    ...,
    {}
    ]
    */
});

const fetchAllSpecificUserMemoriesByEmail = (allUserPublicMemoriesByEmail) => ({
  type: types.fetchAllSpecificUserMemoriesByEmail,
  payload: allUserPublicMemoriesByEmail,
  /*[{},
    {},
    {},
    ...,
    {}
    ]
    */
});

const fetchAllMemoriesByNameOrTagname = (allMemoriesByNameOrTagname) => ({
  type: types.fetchAllMemoriesByNameOrTagname,
  payload: allMemoriesByNameOrTagname,
  /*[{},
    {},
    {},
    ...,
    {}
    ]
    */
});

export const startFetchAndShowRandomMemory = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${urlBase}/get/random-public-memory`);
      if (response.ok) {
        const publicRandomMemory = await response.json();
        const { memoryId } = publicRandomMemory;
        dispatch(activeMemoryToShow(memoryId, publicRandomMemory));
      } else {
        throw await response.json();
      }
    } catch (err) {
      throw err;
    }
  };
};

//En uso
export const startFetchAllUserMemories = (userId) => {
  return async (dispatch) => {
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
    }
  };
};

//En uso
export const startFetchAllUserPublicMemories = (userId) => {
  return async (dispatch) => {
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
    }
  };
};

//En uso
export const startFetchAllUserProtectedMemories = (userId) => {
  return async (dispatch) => {
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
    }
  };
};

//En uso
export const startFetchAllUserPrivateMemories = (userId) => {
  return async (dispatch) => {
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
    }
  };
};

//En uso
export const startFetchAllMemoriesSharedWithTheCurrentUser = (userId) => {
  return async (dispatch) => {
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
    }
  };
};

export const startFetchAllSpecificUserMemoriesByEmail = (email) => {
  return async (dispatch) => {
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
    }
  };
};

export const startFetchAllMemoriesByNameOrTagname = (nameOrTagName) => {
  return async (dispatch) => {
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
    }
  };
};

const getCurrentDate = () => {
  return new Date().toISOString().split("T")[0];
};

export const startCountMemoryView = (memoryId, userId, visibility) => {
  console.log({ userId, memoryId });
  return async (dispatch) => {
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
        return await response.json();
      } else {
        throw await response.json();
      }
    } catch (err) {
      throw err;
    }
  };
};

export const startDeleteMemory = (uid, memoryId, memories) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await fetch(
        `${urlBase}/delete/memory/${uid}/${memoryId}`,
        {
          method: "POST",
        }
      );
      if (response.ok) {
        dispatch(deleteMemory(memoryId, memories));
      } else {
        dispatch(finishLoading());
        throw await response.json();
      }
    } catch (err) {
      throw err;
    } finally {
      dispatch(finishLoading());
    }
  };
};

export const startFetchMemoryAllImages = async (memoryId, visibility) => {
  try {
    const response = await fetch(
      `${urlBase}/get/${visibility}-memory/${memoryId}`
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

const getVisibility = (visibility) => {
  if (visibility === "privado") {
    return "private";
  } else if (visibility === "publico") {
    return "public";
  } else {
    return "protected";
  }
};

export const startSaveOrUpdateMemory = async (memoryInfo, uid) => {
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
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (err) {
    throw err;
  }
};

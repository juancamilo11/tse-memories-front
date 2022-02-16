import { urlBase } from "../environments/enviroment";
import types from "../types/types";
import { startLoading, finishLoading } from "./uiActions";

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

export const countMemoryView = (memoryId, memories) => ({
  type: types.registerMemoryView,
  payload: memoryId,
});

const fetchAllUserMemories = (allUserMemories) => ({
  type: types.fetchAllUserMemories,
  payload: allUserMemories,
  /*{
      publicMemories: [{},{},{},...,{}],
      protectedMemories: [{},{},{},...,{}],
      privateMemories: [{},{},{},...,{}],
    */
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

export const startFetchAllUserMemories = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${urlBase}/get/all-memories/${userId}`);
      if (response.ok) {
        const allUserMemories = await response.json();
        dispatch(fetchAllUserMemories(allUserMemories));
      } else {
        throw await response.json();
      }
    } catch (err) {
      throw err;
    }
  };
};

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

export const startCountMemoryView = (
  memoryId,
  userId,
  visibility,
  memories
) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${urlBase}/put/${visibility}-memory/count-view/${memoryId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            userId,
            visualizationDate: getCurrentDate(),
          }),
        }
      );
      if (response.ok) {
        dispatch(countMemoryView(memoryId, memories));
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

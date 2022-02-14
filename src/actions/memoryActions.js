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

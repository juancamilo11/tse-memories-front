import types from "../types/types";
import { startLoading, finishLoading } from "./uiActions";

const urlBase = "http://localhost:8080";

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

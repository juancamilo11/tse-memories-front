import types from "../types/types";

export const activeMemory = (id, store) => ({
  type: types.setActiveMemory,
  payload: { id, ...store },
});

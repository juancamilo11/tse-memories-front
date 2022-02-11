import types from "../types/types";

const initialState = {
  memoriesList: [],
  activeMemory: null,
};

export const memoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setActiveMemory:
      return {
        ...state,
        activeMemory: {
          ...action.payload,
        },
      };
    case types.loadMemories:
      return {
        ...state,
        memoriesList: [...action.payload],
      };
    case types.memoriesLogoutCleaning:
      return { ...state, activeMemory: null, memoriesList: [] };
    default:
      return state;
  }
};

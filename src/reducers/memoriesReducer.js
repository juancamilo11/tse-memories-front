import types from "../types/types";

const initialState = {
  memoriesList: [],
  activeMemoryToShow: null,
  activeMemoryToUpdate: null,
  activeSearchPanel: false,
  activeEmptyFormForNewMemory: false,
};

export const memoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setActiveMemoryToShow:
      return {
        ...state,
        activeMemoryToShow: {
          ...action.payload,
        },
        activeMemoryToUpdate: null,
        activeSearchPanel: false,
        activeEmptyFormForNewMemory: false,
      };

    case types.setActiveMemoryToUpdate:
      return {
        ...state,
        activeMemoryToShow: null,
        activeMemoryToUpdate: {
          ...action.payload,
        },
        activeSearchPanel: false,
        activeEmptyFormForNewMemory: false,
      };

    case types.setActiveSearchPanel:
      return {
        ...state,
        activeMemoryToShow: null,
        activeMemoryToUpdate: null,
        activeSearchPanel: true,
        activeEmptyFormForNewMemory: false,
      };

    case types.setNothingToShow:
      return {
        ...state,
        activeMemoryToShow: null,
        activeMemoryToUpdate: null,
        activeSearchPanel: false,
        activeEmptyFormForNewMemory: false,
      };

    case types.setNewMemoryForm:
      return {
        ...state,
        activeMemoryToShow: null,
        activeMemoryToUpdate: null,
        activeSearchPanel: false,
        activeEmptyFormForNewMemory: true,
      };

    case types.loadMemories:
      return {
        ...state,
        memoriesList: [...action.payload],
      };

    case types.memoriesLogoutCleaning:
      return { ...state, activeMemory: null, memoriesList: [] };

    case types.deleteMemory:
      return {
        ...state,
        memoriesList: action.payload.memoriesList.filter(
          (memory) => memory.id !== action.payload.memoryId
        ),
      };

    case types.registerMemoryView:
      const { viewsCount } = action.payload.memories.find(
        (memory) => memory.id === action.payload.memoryId
      );
      return {
        ...state,
        memoriesList: action.payload.memories.map((memory) =>
          memory.id === action.payload.memoryId
            ? { ...memory, viewsCount: viewsCount + 1 }
            : memory
        ),
      };

    case types.addMemoryToMemoriesList:
      return {
        ...state,
        memoriesList: [
          action.payload.updatedMemory,
          ...action.payload.memoriesList,
        ],
      };

    case types.fetchAllUserMemories:
      return {
        ...state,
        memoriesList: action.payload,
      };

    case types.fetchAllUserPublicMemories:
      return {
        ...state,
        memoriesList: action.payload,
      };

    case types.fetchAllUserProtectedMemories:
      return {
        ...state,
        memoriesList: action.payload,
      };

    case types.fetchAllUserPrivateMemories:
      return {
        ...state,
        memoriesList: action.payload,
      };

    case types.fetchAllMemoriesSharedWithTheUser:
      return {
        ...state,
        memoriesList: action.payload,
      };

    case types.fetchAllSpecificUserMemoriesByEmail:
      return {
        ...state,
        memoriesList: action.payload,
      };

    case types.fetchAllMemoriesByNameOrTagname:
      return {
        ...state,
        memoriesList: action.payload,
      };

    default:
      return state;
  }
};

import types from "../types/types";

const initialState = {
  memoriesList: [
    {
      id: "9347CJ3JJFV5KD474DKJ7D",
      name: "Recuerdos de Miami",
      memoryDate: "2020-02-05",
      creationDate: "2022-10-25",
      visibility: "publico",
      tagList: ["Miami", "Viaje", "Sol", "Mar", "Playa"],
      ownerId: "buFHTLA40uRLBy5zaIfWdQcloLB3",
      memoryPortrait: "./../assets/img/emptyImage.png",
      location: { country: "USA", city: "Miami" },
      isAFavorite: true,
      viewsCount: 100,
    },
    {
      id: "7J3JD983KR854MCD834NF74",
      name: "Viaje a París",
      memoryDate: "2010-10-03",
      creationDate: "2021-01-20",
      visibility: "publico",
      tagList: [
        "Torre Eiffel",
        "Viaje",
        "Sol",
        "Mar",
        "Playa",
        "Torre Eiffel",
        "Viaje",
        "Sol",
        "Mar",
        "Playa",
      ],
      ownerId: "buFHTLA40uRLBy5zaIfWdQcloLB3",
      memoryPortrait: "./../assets/img/emptyImage.png",
      location: { country: "Francia", city: "París" },
      isAFavorite: false,
      viewsCount: 50,
    },
    {
      id: "493J83465NFV9458KGVN4V3",
      name: "Viaje en Familia  New York",
      memoryDate: "2019-01-09",
      creationDate: "2020-06-11",
      visibility: "publico",
      tagList: ["New york", "Nieve", "Manhattan", "Viaje", "Familia"],
      ownerId: "buFHTLA40uRLBy5zaIfWdQcloLB3",
      memoryPortrait: "./../assets/img/emptyImage.png",
      location: { country: "USA", city: "New York" },
      isAFavorite: true,
      viewsCount: 100,
    },
  ],
  activeMemoryToShow: null,
  activeMemoryToUpdate: null,
  activeSearchPanel: false,
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
      };
    case types.setActiveMemoryToUpdate:
      return {
        ...state,
        activeMemoryToShow: null,
        activeMemoryToUpdate: {
          ...action.payload,
        },
        activeSearchPanel: false,
      };
    case types.setActiveSearchPanel:
      return {
        ...state,
        activeMemoryToShow: null,
        activeMemoryToUpdate: null,
        activeSearchPanel: true,
      };
    case types.setNothingToShow:
      return {
        ...state,
        activeMemoryToShow: null,
        activeMemoryToUpdate: null,
        activeSearchPanel: false,
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
        memoriesList: action.payload.memories.filter(
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
    default:
      return state;
  }
};

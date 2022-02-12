import types from "../types/types";

const initialState = {
  memoriesList: [
    {
      id: "9347CJ3JJFV5KD474DKJ7D",
      name: "Recuerdos de Miami",
      memoryDate: "2020-02-05",
      creationDate: "2022-10-25",
      visibility: "PUBLIC",
      tagList: ["Miami", "Viaje", "Sol", "Mar", "Playa"],
      ownerId: "4329KM32F97N54398",
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
      visibility: "PUBLIC",
      tagList: ["Torre Eiffel", "Viaje", "Sol", "Mar", "Playa"],
      ownerId: "4329KM32F97N54398",
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
      visibility: "PUBLIC",
      tagList: ["New york", "Nieve", "Manhattan", "Viaje", "Familia"],
      ownerId: "4329KM32F97N54398",
      memoryPortrait: "./../assets/img/emptyImage.png",
      location: { country: "USA", city: "New York" },
      isAFavorite: true,
      viewsCount: 100,
    },
  ],
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

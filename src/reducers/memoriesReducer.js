import types from "../types/types";

const initialState = {
  memoriesList: [
    //******************* PUBLIC MEMORIES ********************
    {
      id: "9347CJ3JJFV5KD474DKJ7D",
      name: "Recuerdos de Miami",
      memoryDate: "2020-02-05",
      creationDate: "2022-10-25",
      visibility: "publico",
      tagList: ["Miami", "Viaje", "Sol", "Mar", "Playa"],
      creatorId: "R5bPuQsNHoWRxG1NUqf45fb6Eff2",
      memoryPortrait: "./../assets/img/emptyImage.png",
      location: { country: "USA", city: "Miami" },
      isAFavorite: true,
      viewsCount: 100,
    },
    {
      id: "7J3JD983KR854ZCZXC",
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
      creatorId: "buFHTLA40uRLBy5zaIfWdQcloLB3",
      memoryPortrait: "./../assets/img/emptyImage.png",
      location: { country: "Francia", city: "París" },
      isAFavorite: false,
      viewsCount: 50,
    },
    {
      id: "493J83465NFCXVZCV",
      name: "Viaje en Familia  New York",
      memoryDate: "2019-01-09",
      creationDate: "2020-06-11",
      visibility: "publico",
      tagList: ["New york", "Nieve", "Manhattan", "Viaje", "Familia"],
      creatorId: "R5bPuQsNHoWRxG1NUqf45fb6Eff2",
      memoryPortrait: "./../assets/img/emptyImage.png",
      location: { country: "USA", city: "New York" },
      isAFavorite: true,
      viewsCount: 100,
    },
    {
      id: "493J83465NFV9458KGZXV",
      name: "Viaje en Familia a Estados Unidos",
      memoryDate: "2019-01-09",
      creationDate: "2020-06-11",
      visibility: "publico",
      tagList: ["New york", "Nieve", "Manhattan", "Viaje", "Familia"],
      creatorId: "HFfDtL7kmNdrFylobVfqiH53Uc62",
      memoryPortrait: "./../assets/img/emptyImage.png",
      location: { country: "USA", city: "New York" },
      isAFavorite: true,
      viewsCount: 100,
    },
    {
      id: "493J83465NFV9458KGXVZXCV",
      name: "Viaje en Familia  New York",
      memoryDate: "2019-01-09",
      creationDate: "2020-06-11",
      visibility: "publico",
      tagList: ["New york", "Nieve", "Manhattan", "Viaje", "Familia"],
      creatorId: "buFHTLA40uRLBy5zaIfWdQcloLB3",
      memoryPortrait: "./../assets/img/emptyImage.png",
      location: { country: "USA", city: "New York" },
      isAFavorite: true,
      viewsCount: 100,
    },
    {
      id: "493J83465NFV9458ASFDSDF",
      name: "Viaje en Familia  New York",
      memoryDate: "2019-01-09",
      creationDate: "2020-06-11",
      visibility: "publico",
      tagList: ["New york", "Nieve", "Manhattan", "Viaje", "Familia"],
      creatorId: "buFHTLA40uRLBy5zaIfWdQcloLB3",
      memoryPortrait: "./../assets/img/emptyImage.png",
      location: { country: "USA", city: "New York" },
      isAFavorite: true,
      viewsCount: 100,
    },
    {
      id: "493J83465NFV9458HGFHFH",
      name: "Viaje en Familia  New York",
      memoryDate: "2019-01-09",
      creationDate: "2020-06-11",
      visibility: "publico",
      tagList: ["New york", "Nieve", "Manhattan", "Viaje", "Familia"],
      creatorId: "buFHTLA40uRLBy5zaIfWdQcloLB3",
      memoryPortrait: "./../assets/img/emptyImage.png",
      location: { country: "USA", city: "New York" },
      isAFavorite: true,
      viewsCount: 100,
    },
    {
      id: "493J83465NFV9458KGDFDF",
      name: "Viaje con amigos en Canadá",
      memoryDate: "2019-01-01",
      creationDate: "2020-06-18",
      visibility: "publico",
      tagList: ["Ontario", "Nieve", "Primavera", "Viaje", "Amigos"],
      creatorId: "HFfDtL7kmNdrFylobVfqiH53Uc62",
      memoryPortrait: "./../assets/img/emptyImage.png",
      location: { country: "Canadá", city: "Ontario" },
      isAFavorite: true,
      viewsCount: 100,
    },

    //******************* PROTECTED MEMORIES ********************

    {
      id: "493J83465NFV9458KGVN4",
      name: "Viaje en Familia  New York",
      memoryDate: "2019-01-09",
      creationDate: "2020-06-11",
      visibility: "protegido",
      tagList: ["New york", "Nieve", "Manhattan", "Viaje", "Familia"],
      creatorId: "HFfDtL7kmNdrFylobVfqiH53Uc62",
      memoryPortrait: "./../assets/img/emptyImage.png",
      location: { country: "USA", city: "New York" },
      isAFavorite: true,
      viewsCount: 100,
    },

    //******************* PRIVATE MEMORIES ********************

    {
      id: "493J83465NFV9458KGVN4",
      name: "Viaje en Familia  New York",
      memoryDate: "2019-01-09",
      creationDate: "2020-06-11",
      visibility: "privado",
      tagList: ["New york", "Nieve", "Manhattan", "Viaje", "Familia"],
      creatorId: "HFfDtL7kmNdrFylobVfqiH53Uc62",
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

    case types.fetchAllUserMemories:
      const { publicMemories, protectedMemories, privateMemories } =
        action.payload.allUserMemories;
      return {
        ...state,
        memoriesList: [
          ...publicMemories,
          ...protectedMemories,
          ...privateMemories,
        ],
      };

    case types.fetchAllUserPublicMemories:
      const { allUserPublicMemories } = action.payload;
      return {
        ...state,
        memoriesList: [...allUserPublicMemories],
      };

    case types.fetchAllUserProtectedMemories:
      const { allUserProtectedMemories } = action.payload;
      return {
        ...state,
        memoriesList: [...allUserProtectedMemories],
      };

    case types.fetchAllUserPrivateMemories:
      const { allUserPrivateMemories } = action.payload;
      return {
        ...state,
        memoriesList: [...allUserPrivateMemories],
      };

    default:
      return state;
  }
};

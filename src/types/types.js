const types = {
  //Action types for Login / Logout
  authLogin: "[auth] login",
  authLogout: "[auth] logout",

  //Action types for UI events
  uiSetError: "[UI] Set Error",
  uiRemoveError: "[UI] Remove Error",
  uiStartLoading: "[UI] Start Loading",
  uiFinishLoading: "[UI] Finish Loading",

  setActiveMemoryToShow: "[memories] Set Active Memory to Show",
  setActiveMemoryToUpdate: "[memories] Set Active Memory to Update",
  setActiveSearchPanel: "[memories] Set Active Search Panel",

  loadMemories: "[memories] Load Memories",
  memoriesLogoutCleaning: "[memories] Memories Logout Cleaning",
  modifyMemory: "[memories] Modify Memory",
  deleteMemory: "[memories] Delete Memory",
};

export default types;

const types = {
  //Action types for Login / Logout
  authLogin: "[auth] login",
  authLogout: "[auth] logout",

  //Action types for UI events
  uiSetError: "[UI] Set Error",
  uiRemoveError: "[UI] Remove Error",
  uiStartLoading: "[UI] Start Loading",
  uiFinishLoading: "[UI] Finish Loading",

  setActiveMemory: "[memories] Set Active Memories",
  loadMemories: "[memories] Load Memories",
  memoriesLogoutCleaning: "[memories] Memories Logout Cleaning",
};

export default types;

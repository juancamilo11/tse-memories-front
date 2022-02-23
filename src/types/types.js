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
  setNothingToShow: "[memories] Set Active Nothing to Show",
  setNewMemoryForm: "[memories] Set Empty Form For New Memory",

  loadMemories: "[memories] Load Memories",
  memoriesLogoutCleaning: "[memories] Memories Logout Cleaning",
  modifyMemory: "[memories] Modify Memory",
  deleteMemory: "[memories] Delete Memory",
  registerMemoryView: "[memories] Register Memory View",
  addMemoryToMemoriesList: "[memories] Add Memory to Memories List",

  addUploadedImageUrl: "[loadedImages] add Loaded image",
  removeUploadedImageUrl: "[loadedImages] remove Loaded image",

  fetchAllUserMemories: "[FetchUserMemories] Fetch All User Memories",
  fetchAllUserPublicMemories:
    "[FetchUserMemories] Fetch All User Public Memories",
  fetchAllUserProtectedMemories:
    "[FetchUserMemories] Fetch All User Protected Memories",
  fetchAllUserPrivateMemories:
    "[FetchUserMemories] Fetch All User Private Memories",
  fetchAllMemoriesSharedWithTheUser:
    "[FetchUserMemories] Fetch All Memories Shared With The Current User",
  fetchAllSpecificUserMemoriesByEmail:
    "[FetchUserMemories] Fetch All Specific User Memories By Email",
  fetchAllMemoriesByNameOrTagname:
    "[FetchUserMemories] Fetch All Memories By Memory Name or Tagname",
};

export default types;

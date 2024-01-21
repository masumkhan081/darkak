import { tabMap } from "@/static-data/profile-page-tabs";
import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    currentTab: Object.keys(tabMap)[0],
    currentSubTab: tabMap[Object.keys(tabMap)[0]][0],
  },
  reducers: {
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload.currentTab;
      state.currentSubTab = tabMap[action.payload.currentTab][0];
    },
    setCurrentSubTab: (state, action) => {
      state.currentSubTab = action.payload.currentSubTab;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentTab, setCurrentSubTab } = profileSlice.actions;

export default profileSlice.reducer;

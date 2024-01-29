import { tabMap } from "@/static-data/tabs-page";
import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
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
export const { setCurrentTab, setCurrentSubTab } = usersSlice.actions;

export default usersSlice.reducer;

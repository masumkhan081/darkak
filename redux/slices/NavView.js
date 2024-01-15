import { createSlice } from "@reduxjs/toolkit";

export const navViewSlice = createSlice({
  name: "navView",
  initialState: {
    isSideNavFolded: false,
    isSideNavVisible: true,
    isProfileModalOpen: false,
    expansion: {
      "User Role": false,
      User: false,
      Shop: false,
      Supplier: false,
      Customer: false,
      Service: false,
      "Product Group": false,
      Brand: false,
      "Product Category": false,
      "Product Model": false,
      Product: false,
      Stock: false,
      Order: false,
    },
  },
  reducers: {
    setExpansion: (state, action) => {
      const { view, status } = action.payload; 
     
      state.expansion[`${view}`] = status;
    },

    setProfileModal: (state, action) => {
      state.isProfileModalOpen = action.payload.isProfileModalOpen;
    },
    setSideNavVisibility: (state, action) => {
      state.isSideNavVisible = action.payload.isSideNavVisible;
    },
    setSideNavFoldability: (state, action) => {
      state.isSideNavFolded = action.payload.isSideNavFolded;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setExpansion,
  setProfileModal,
  setSideNavFoldability,
  setSideNavVisibility,
} = navViewSlice.actions;

export default navViewSlice.reducer;

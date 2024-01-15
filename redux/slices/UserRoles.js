import { createSlice } from "@reduxjs/toolkit";

export const roleSlice = createSlice({
  name: "userRoles",
  initialState: {
    roles: [],
  },
  reducers: {
    setRoles: (state, action) => {
      state.roles = [...state.roles, action.payload.data];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRoles } = roleSlice.actions;

export default roleSlice.reducer;

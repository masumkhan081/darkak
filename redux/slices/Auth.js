import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "some sorta email",
    image: null,
    id: "",
    role: "",
    authenticated: false,
  },
  reducers: {
    setLoggedInUser: (state, action) => {
      // state = {
      //   ...state,
      //   ...action.payload,
      // };
      state.authenticated = action.payload.authenticated;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInUser } = authSlice.actions;

export default authSlice.reducer;

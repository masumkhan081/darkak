import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
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
      // alert(JSON.stringify(action.payload));
      state = {
        ...state,
        ...action.payload,
        authenticated: action.payload.authenticated,
      };
      // state.username = action.payload.username;
      // state.password = action.payload.password;
      // state.authenticated = action.payload.authenticated;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInUser } = userSlice.actions;

export default userSlice.reducer;

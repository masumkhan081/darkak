import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/User";
import navSlice from "./slices/NavView";
import profileSlice from "./slices/Profile";

export default configureStore({
  reducer: {
    user: userSlice,
    navView: navSlice,
    profile: profileSlice,
  },
});

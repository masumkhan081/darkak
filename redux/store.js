import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/User";
import navSlice from "./slices/NavView";

export default configureStore({
  reducer: {
    user: userSlice,
    navView: navSlice,
  },
});

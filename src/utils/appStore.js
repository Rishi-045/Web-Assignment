import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./usersSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});

export default appStore;

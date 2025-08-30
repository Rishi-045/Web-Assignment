import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
  },
  reducers: {
    addUsers: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { addUsers } = userSlice.actions;

export default userSlice.reducer;

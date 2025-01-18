import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  composePostVisibility: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
    changeVisibility: (state, action) => {
      state.composePostVisibility = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { login, logout, changeVisibility } = authSlice.actions;

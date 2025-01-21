import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: true,
  userData: null,
  composePostVisibility: false,
  pageNavIconStatus: "home",
  authPageSizeStatus: false,
  authServiceError: "",
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
    setPageNavIconStatus: (state, action) => {
      state.pageNavIconStatus = action.payload;
    },
    setAuthPageSizeStatus: (state, action) => {
      state.authPageSizeStatus = action.payload;
    },
    setAuthServiceError: (state, action) => {
      state.authPageSizeStatus = action.payload;
    },
  },
});

export default authSlice.reducer;
export const {
  login,
  logout,
  changeVisibility,
  setPageNavIconStatus,
  setAuthPageSizeStatus,
  setAuthServiceError,
} = authSlice.actions;

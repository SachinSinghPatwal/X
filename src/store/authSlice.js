import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: true,
  userData: null,
  composePostVisibility: false,
  pageNavIconStatus: "home",
  togglingAuthPageStatus: false,
  overFlowStatus: "",
  forceReload: false,
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
    setTogglingAuthPageStatus: (state, action) => {
      state.togglingAuthPageStatus = action.payload;
    },
    setOverFlowStatus: (state, action) => {
      state.overFlowStatus = action.payload;
    },
    setForceReload: (state, action) => {
      state.forceReload = action.payload;
    },
  },
});

export default authSlice.reducer;
export const {
  login,
  logout,
  changeVisibility,
  setPageNavIconStatus,
  setTogglingAuthPageStatus,
  setOverFlowStatus,
  setForceReload,
} = authSlice.actions;

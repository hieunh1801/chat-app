import { createSlice } from "@reduxjs/toolkit";

const socketSlice = createSlice({
  name: "socket",
  initialState: {
    login: {
      isLogin: false,
      error: undefined,
    },
  },
  reducers: {
    loginSuccess: (state) => {
      state.login.isLogin = true;
    },
    loginFailed: (state, action) => {
      state.login.isLogin = false;
      state.login.error = action.payload.error;
    },
    logout: (state) => {
      state.login.isLogin = false;
    },
  },
});

export const socketActions = socketSlice.actions;

export const socketReducer = socketSlice.reducer;

export const socketSelector = {
  login: (store) => store.socket.login,
};

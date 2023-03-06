import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    isLogged: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.isLogged = false;
      state.user = [];
    },
  },
});
const { actions, reducer } = userSlice;
export const { login, getUser, logout } = actions;
export default reducer;

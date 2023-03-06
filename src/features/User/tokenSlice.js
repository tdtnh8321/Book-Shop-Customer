import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    getToken: (state, action) => {
      return action.payload;
    },
    clearToken: (state, action) => {
      return "";
    },
  },
});
const { actions, reducer } = tokenSlice;
export const { getToken, clearToken } = actions;
export default reducer;

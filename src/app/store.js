import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice";
import userReducer from "../features/User/userSlice";
import tokenReducer from "../features/User/tokenSlice";
const rootReducer = {
  cart: cartReducer,
  user: userReducer,
  token: tokenReducer,
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;

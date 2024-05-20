import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/shop/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

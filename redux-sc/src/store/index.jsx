import { configureStore } from "@reduxjs/toolkit";
import productslice from "./productslice";

export const store = configureStore({
  reducer: {
    products: productslice.reducer,
  },
});

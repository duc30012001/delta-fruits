import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartItemsReducer from "./cartItemsSlice";
import quickViewReducer from "./quickViewSlice";

const rootReducer = {
  products: productsReducer,
  cartItems: cartItemsReducer,
  quickView: quickViewReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

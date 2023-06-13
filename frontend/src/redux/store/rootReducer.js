import { reducer as userReducer } from "../slices/userSlice";
import { reducer as productReducer } from "../slices/productSlice";
import { reducer as orderReducer } from "../slices/orderSlice";
import { reducer as cartReducer } from "../slices/cartSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer , // Update the import statement to use `.reducer`
  order: orderReducer,
  cart: cartReducer,
});

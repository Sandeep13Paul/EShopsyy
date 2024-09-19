import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slices/CartSlice";

export const store = configureStore({
    reducer : {
        cart: CartReducer //pehle hum cartslice import kr rhe the to error aa rha tha
    }
});
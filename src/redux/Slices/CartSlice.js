import { createSlice } from "@reduxjs/toolkit"

export const CartSlice = createSlice({
    name: "cart",
    initialState: [], //initial empty array to show no cart item is present in cart page 
    reducers: {
        add:(state , action) => {
            state.push(action.payload); //jo bhi i/p parameter tha, usme push kiya hai
        },
        remove: (state , action)=> {
            return state.filter((item) => item.id !== action.payload);
        }
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;
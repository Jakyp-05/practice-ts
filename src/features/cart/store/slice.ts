import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart } from "../type";

interface cartState {
  cart: Cart[];
}

const initialState: cartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      const itemCart = state.cart.some((el) => el.id === action.payload.id);
      if (!itemCart) {
        state.cart.push(action.payload);
      }
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;

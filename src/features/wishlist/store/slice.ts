import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Wishlist } from "../type";

interface wishlistState {
  wishlist: Wishlist[];
}

const initialState: wishlistState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishList: (state, action: PayloadAction<Wishlist>) => {
      const itemWish = state.wishlist.some((el) => el.id === action.payload.id);
      if (!itemWish) {
        state.wishlist.push(action.payload);
      }
    },
    removeWishList: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addWishList, removeWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;

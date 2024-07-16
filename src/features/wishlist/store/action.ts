import { createAsyncThunk } from "@reduxjs/toolkit";
import { Wishlist } from "../type";
import { fetchWishlist } from "../api";

export const fetchWishlistAsyncId = createAsyncThunk<Wishlist, number>(
  "post/fetchWishlistAsyncId",
  async (wishlistId, { rejectWithValue }) => {
    try {
      const wishlist = await fetchWishlist(wishlistId);
      return wishlist;
    } catch (error) {
      return rejectWithValue("Failed to fetch post");
    }
  }
);

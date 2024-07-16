import { createAsyncThunk } from "@reduxjs/toolkit";
import { Cart } from "../type";
import { fetchCart } from "../api";

export const fetchCartAsyncId = createAsyncThunk<Cart, number>(
  "post/fetchCartAsyncId",
  async (cartId, { rejectWithValue }) => {
    try {
      const cart = await fetchCart(cartId);
      return cart;
    } catch (error) {
      return rejectWithValue("Failed to fetch post");
    }
  }
);

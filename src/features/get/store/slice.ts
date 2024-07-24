import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPostAsync } from "./action";
import { Post } from "../type";

interface PostState {
  posts: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  status: "idle",
  error: null,
};

const getSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPostAsync.fulfilled,
        (state, action:PayloadAction< Post[]>) => {
          state.status = "succeeded";
          state.posts = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchPostAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch";
      });
  },
});

export default getSlice.reducer;

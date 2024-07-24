import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteAsyncPost, postsAsync } from "./actions";
import { formState } from "../type";
import { Posts } from "shared/types/type";

const initialState: formState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // setTitle: (state, action: PayloadAction<string>) => {
    //   state.title = action.payload;
    // },
    // setBody: (state, action: PayloadAction<string>) => {
    //   state.body = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postsAsync.fulfilled, (state, action: PayloadAction<Posts>) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(postsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load posts";
      })
      .addCase(
        deleteAsyncPost.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.posts = state.posts.filter(
            (post) => post.id !== action.payload
          );
        }
      );
  },
});

export default postsSlice.reducer;

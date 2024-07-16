import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../post/type";
import { fetchPostAsyncId } from "./actions";

interface PostState {
  post: Post | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PostState = {
  post: null,
  status: "failed",
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostAsyncId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPostAsyncId.fulfilled,
        (state, action: PayloadAction<Post>) => {
          state.status = "succeeded";
          state.post = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchPostAsyncId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch post";
      });
  },
});

export default postSlice.reducer;

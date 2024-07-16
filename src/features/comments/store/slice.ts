import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comments } from "shared/types/type";
import { fetchIdComments } from "./action";

interface commentsState {
  comments: Comments[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: commentsState = {
  comments: [],
  status: "idle",
  error: null,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIdComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchIdComments.fulfilled,
        (state, action: PayloadAction<Comments[]>) => {
          (state.status = "succeeded");
            (state.comments = action.payload);
            (state.error = null);
        }
      )
      .addCase(fetchIdComments.rejected, (state, action) => {
        (state.status = "failed");
          (state.error = action.error.message || "Failed to fetch comments");
      });
  },
});

export default commentSlice.reducer;

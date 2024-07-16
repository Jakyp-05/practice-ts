import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comments } from "shared/types/type";
import { fetchComments } from "../api";

export const fetchIdComments = createAsyncThunk<Comments[], number>(
  "comments",
  async (commentsId, { rejectWithValue }) => {
    try {
      const comments = await fetchComments(commentsId);
      return comments;
    } catch (error) {
      return rejectWithValue("Failed to fetch comments");
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../get/type";
import { fetchPostId } from "../api";

export const fetchPostAsyncId = createAsyncThunk<Post, number>(
  "post/fetchPostAsyncId",
  async (postsId, { rejectWithValue }) => {
    try {
      const post = await fetchPostId(postsId);
      return post;
    } catch (error) {
      return rejectWithValue("Failed to fetch post");
    }
  }
);

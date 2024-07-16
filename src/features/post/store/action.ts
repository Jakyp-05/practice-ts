import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPost } from "../api";
import { Post } from "../type";

export const fetchPostAsync = createAsyncThunk<Post[], void>(
  "post/fetchPostAsync",
  async () => {
    try {
      const posts = await fetchPost();
      return posts;
    } catch (error) {
      throw new Error("Failed to fetch post");
    }
  }
);

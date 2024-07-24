import { createAsyncThunk } from "@reduxjs/toolkit";
import { deletePost, posts } from "../api";

export const postsAsync = createAsyncThunk(
  "posts/loadPosts",
  async (data: { title: string; body: string }) => {
    return await posts(data);
  }
);

export const deleteAsyncPost = createAsyncThunk(
  "posts/deletePost",
  async (id: number) => {
    await deletePost(id);
    return id;
  }
);

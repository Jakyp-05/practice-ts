import { apiRoot } from "app/api";
import { Post } from "../get/type";

export const fetchPostId = async (id: number): Promise<Post> => {
  const response = await apiRoot.get<Post>(`/posts/${id}`);
  return response.data;
};

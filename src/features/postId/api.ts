import { apiRoot } from "../../app/api";
import { Post } from "../post/type";

export const fetchPostId = async (id: number): Promise<Post> => {
  const response = await apiRoot.get<Post>(`/posts/${id}`);
  return response.data;
};

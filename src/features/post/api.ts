import { apiRoot } from "app/api";
import { Posts } from "shared/types/type";

export const posts = async (data: {
  title: string;
  body: string;
}): Promise<Posts> => {
  const response = await apiRoot.post<Posts>("posts", data);
  return response.data;
};

export const deletePost = async (id: number): Promise<number> => {
  await apiRoot.delete(`posts/${id}`);
  return id;
};

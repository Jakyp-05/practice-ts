import { apiRoot } from "app/api";
import { Post } from "./type";

export const fetchPost = async (): Promise<Post[]> => {
  const response = await apiRoot.get<Post[]>("/posts");
  return response.data;
};


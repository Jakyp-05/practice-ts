import { apiRoot } from "app/api";
import { Comments } from "shared/types/type";

export const fetchComments = async (id: number): Promise<Comments[]> => {
  const response = await apiRoot.get<Comments[]>(`/posts/${id}/comments`);
  return response.data;
};

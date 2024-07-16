import { apiRoot } from "app/api";
import { Cart } from "./type";

export const fetchCart = async (id: number): Promise<Cart> => {
  const response = await apiRoot.get<Cart>(`/posts/${id}`);
  return response.data;
};

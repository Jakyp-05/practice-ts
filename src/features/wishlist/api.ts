import { apiRoot } from "app/api";
import { Wishlist } from "./type";

export const fetchWishlist = async (id: number): Promise<Wishlist> => {
  const response = await apiRoot.get(`/posts/${id}`);
  return response.data;
};

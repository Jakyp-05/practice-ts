export interface Wishlist {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ApiResponse {
  posts: Wishlist[];
}

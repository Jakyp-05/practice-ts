export interface Cart {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ApiResponse {
  posts: Cart[];
}

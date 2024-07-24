import { Posts } from "shared/types/type";

export interface formState {
  posts: Posts[];
  loading: boolean;
  error: string | null;
}

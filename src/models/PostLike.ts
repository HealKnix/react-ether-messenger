import { Post } from "./Post";
import { User } from "./User";

export interface PostLike {
  id: number;
  post: Post;
  user: User;
  createdAt: Date;
  updatedDate: Date | null;
}

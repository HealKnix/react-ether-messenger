import { Post } from './Post';
import { User } from './User';

export interface PostComment {
  id: number;
  post: Post;
  user: User;
  text: string;
  createdAt: Date;
  updated_at: Date | null;
}

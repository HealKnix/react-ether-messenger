import { User } from './User';

export interface Post {
  id: number;
  text: string;
  images?: string[] | null;
  likeCount: number;
  commentCount: number;
  created_by: User;
  created_at: Date;
  updated_at: Date | null;
}

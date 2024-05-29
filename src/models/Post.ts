import { User } from './User';

export interface Post {
  id: number;
  text: string;
  images?: string[] | null;
  likeCount: number;
  commentCount: number;
  createdBy: User;
  dateCreated: Date;
  updatedDate: Date | null;
}

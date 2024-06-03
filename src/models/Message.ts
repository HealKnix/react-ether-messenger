import { User } from './User';

export interface Message {
  id: number;
  text: string;
  date: Date;
  user: User;
  conversation: number;
}

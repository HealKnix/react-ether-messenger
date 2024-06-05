import { User } from './User';

export interface Message {
  id: number;
  text: string;
  date: Date;
  peer_id: number;
  user: User | null;
}

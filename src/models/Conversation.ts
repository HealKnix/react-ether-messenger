import { Message } from './Message';
import { User } from './User';

type TypeConversation = 'user' | 'chat';

export interface Conversation {
  id: number;
  type: TypeConversation;
  last_message: Message;
  from_user: User;
  to_user: User;

  users?: User[];
  admins?: User[] | null;
  owner?: User | null;
}

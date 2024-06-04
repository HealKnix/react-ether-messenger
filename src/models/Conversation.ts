import { Message } from './Message';
import { User } from './User';

type _ConversationUser = {
  type: 'user';

  user: User;
};

type _ConversationChat = {
  type: 'chat';

  members: User[];
  admins: User[];
  owner: User;
};

export type Conversation = {
  id: number;
  type: 'user' | 'chat';
  peer_id: number;
  last_message: string;
  messages: Message[];
} & (_ConversationUser | _ConversationChat);

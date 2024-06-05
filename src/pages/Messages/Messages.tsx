import { FC, useState } from 'react';

import Input from '@/components/Input/Input';
import AvatarText from '@/components/AvatarText/AvatarText';

import { conversationList } from '@/models/mock/conversation';
import MessageContent from './MessageContent/MessageContent';
import { Message } from '@/models/Message';
import { User } from '@/models/User';

import './Messages.scss';
import { useNavigate } from 'react-router-dom';

const Messages: FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(null);

  return (
    <>
      <div className="messages__wrapper">
        <div className="messages-user-list__wrapper">
          <div className="messages-user-list-search">
            <Input placeholder="Искать чат" />
          </div>
          <div className="messages-user-list">
            {conversationList.map((conversation) => {
              if (conversation.type === 'user') {
                return (
                  <AvatarText
                    key={conversation.id}
                    selected={user?.id === conversation.user.id}
                    img={conversation.user.avatar}
                    name={`${conversation.user.firstName} ${conversation.user.lastName}`}
                    description={conversation.last_message}
                    onClick={() => {
                      setUser(conversation.user);
                      setMessages(conversation.messages);
                      navigate(`conv/${conversation.peer_id}`, {
                        replace: true,
                      });
                    }}
                  />
                );
              } else if (conversation.type === 'chat') {
                // TODO: сделать потом для чата
              }
            })}
          </div>
        </div>
        <div className="messages-message__wrapper">
          <MessageContent user={user} messages={messages} />
        </div>
      </div>
    </>
  );
};

export default Messages;

import { FC, useState } from 'react';

import Input from '@/components/Input/Input';
import AvatarText from '@/components/AvatarText/AvatarText';

import { conversationList } from '@/models/mock/conversation';
import MessageContent from './MessageContent/MessageContent';
import { User } from '@/models/User';

import './Messages.scss';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { useFetchUsers } from '@/hooks/api/useFetchUsers';
import { useFetchPeers } from '@/hooks/api/useFetchPeers';
import { useFetchMessages } from '@/hooks/api/useFetchMessages';

const Messages: FC = () => {
  const navigate = useNavigate();
  const { getMessagesByPeerId } = useFetchMessages();
  const { getUserById } = useFetchUsers();
  const { getPeerById } = useFetchPeers();
=======

const Messages: FC = () => {
  const navigate = useNavigate();
>>>>>>> 8d6366642bc0f448de7d414a7452f74ae24ed8f8
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <div className="messages__wrapper">
        <div className="messages-user-list__wrapper">
          <div className="messages-user-list-search">
            <Input placeholder="Искать чат" />
          </div>
          <div className="messages-user-list">
            {conversationList.map((conversation) => {
              const peer = getPeerById(conversation.peer_id);
              if (peer?.type === 'user') {
                const userConversation =
                  getUserById(conversation.peer_id) ?? null;
                return (
                  <AvatarText
                    key={conversation.id}
                    selected={user?.id === userConversation?.id}
                    img={`${userConversation?.avatar}`}
                    name={`${userConversation?.firstName} ${userConversation?.lastName}`}
                    description={conversation.last_message}
                    onClick={() => {
<<<<<<< HEAD
                      setUser(userConversation);
                      const messages = getMessagesByPeerId(
                        conversation.peer_id,
                      );
                      console.log(messages);

=======
                      setUser(conversation.user);
                      setMessages(conversation.messages);
>>>>>>> 8d6366642bc0f448de7d414a7452f74ae24ed8f8
                      navigate(`conv/${conversation.peer_id}`, {
                        replace: true,
                      });
                    }}
                  />
                );
              } else if (peer?.type === 'chat') {
                // TODO: сделать потом для чата
              }
            })}
          </div>
        </div>
        <div className="messages-message__wrapper">
          <MessageContent />
        </div>
      </div>
    </>
  );
};

export default Messages;

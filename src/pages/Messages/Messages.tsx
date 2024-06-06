import { FC } from 'react';

import Input from '@/components/Input/Input';
import AvatarText from '@/components/AvatarText/AvatarText';

import MessageContent from './MessageContent/MessageContent';

import './Messages.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchUsers } from '@/hooks/api/useFetchUsers';
import { useFetchPeers } from '@/hooks/api/useFetchPeers';
import { useFetchConversations } from '@/hooks/api/useFetchConversations';

const Messages: FC = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const { conversations } = useFetchConversations();
  const { getUserById } = useFetchUsers();
  const { getPeerById } = useFetchPeers();

  return (
    <>
      <div className="messages__wrapper">
        <div className="messages-user-list__wrapper">
          <div className="messages-user-list-search">
            <Input placeholder="Искать чат" />
          </div>
          <div className="messages-user-list">
            {conversations.map((conversation) => {
              const peer = getPeerById(conversation.peer_id);
              if (peer?.type === 'user') {
                const userConversation =
                  getUserById(conversation.peer_id) ?? null;

                return (
                  <AvatarText
                    key={conversation.id}
                    selected={location.pathname.includes(
                      `/conv/${conversation.peer_id}`,
                    )}
                    img={`${userConversation?.avatar}`}
                    name={`${userConversation?.firstName} ${userConversation?.lastName}`}
                    description={conversation.last_message}
                    onClick={() => {
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

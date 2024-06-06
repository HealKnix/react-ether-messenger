import AvatarText from '@/components/AvatarText/AvatarText';
import Input from '@/components/Input/Input';
import { useFetchConversations } from '@/hooks/api/useFetchConversations';
import { useFetchMessages } from '@/hooks/api/useFetchMessages';
import { useFetchPeers } from '@/hooks/api/useFetchPeers';
import { useFetchUsers } from '@/hooks/api/useFetchUsers';
import { Message } from '@/models/Message';
import { User } from '@/models/User';
import { useAuthStore } from '@/store/useAuthStore';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import './MessageContent.scss';

const MessageContent: FC = () => {
  const { id } = useParams();

  const paramsQuery = useMemo(() => {
    return {
      id: parseInt(id ?? '-1'),
    };
  }, [id]);

  const authStore = useAuthStore();
  const { messages, addMessage, getMessagesByPeerId } = useFetchMessages();
  const { updateConversationLastMessageByPeerId } = useFetchConversations();
  const { peers, addPeer } = useFetchPeers();
  const { getUserById } = useFetchUsers();

  const [userConversation, setUserConversation] = useState(
    getUserById(paramsQuery.id ?? null),
  );

  const [messagesByDifferentUsers, setMessagesByDifferentUsers] = useState<
    Message[][]
  >([]);

  const inputSendMessage = useRef<HTMLInputElement>(null);

  const sendMessageHandler = (text: string) => {
    addPeer({
      id: peers.length,
      peer_id: paramsQuery.id,
      type: 'user',
      message_id: messages?.length ?? -1,
    });
    addMessage({
      id: messages?.length ?? -1,
      text: text,
      date: new Date(),
      user: authStore.user,
      peer_id: paramsQuery.id,
    });
    updateConversationLastMessageByPeerId(paramsQuery.id, text);
  };

  useEffect(() => {
    setMessagesByDifferentUsers([]);
    setUserConversation(getUserById(paramsQuery.id));

    let currUserMessage: User | null = null;

    const messagesConversation = getMessagesByPeerId(paramsQuery.id);

    messagesConversation.forEach((message) => {
      const isOwnMessage: boolean = message.user?.id === currUserMessage?.id;

      if (!isOwnMessage) {
        currUserMessage = message.user;
        setMessagesByDifferentUsers((messagesByDifferentUsers) => [
          ...messagesByDifferentUsers,
          [],
        ]);
      }

      setMessagesByDifferentUsers((messagesByDifferentUsers) => {
        messagesByDifferentUsers[messagesByDifferentUsers.length - 1]?.push(
          message,
        );
        return messagesByDifferentUsers;
      });
    });
  }, [id, messages]);

  if (!userConversation) return <center>Выберите чат для общения</center>;

  return (
    <>
      <div className="messages-message-header">
        <AvatarText
          img={`${userConversation.avatar}`}
          name={`${userConversation.firstName} ${userConversation.lastName}`}
          description={`Был${userConversation.sex === 'f' ? 'а' : ''} актив${userConversation.sex === 'f' ? 'на' : 'ен'} 20 мин. назад`}
        />
      </div>
      <div className="messages-message-messages">
        {messagesByDifferentUsers.length === 0 && (
          <span>У вас нет переписки с этим пользователем</span>
        )}
        {messagesByDifferentUsers.length !== 0 && (
          <>
            {messagesByDifferentUsers.map((messageArray, index) => {
              return (
                <div key={index}>
                  {messageArray.map((message) => {
                    const isOwnMessage: boolean =
                      authStore.user?.id === message.user?.id;

                    return (
                      <span
                        className={`bubble-message${isOwnMessage ? ' own' : ''}`}
                        key={message.id + 25252}
                      >
                        {message.text}
                        <span className="bubble-message-time">
                          {message.date.toLocaleTimeString().slice(0, 5)}
                        </span>
                      </span>
                    );
                  })}
                </div>
              );
            })}

            <div>
              <span className="message-date">Май 27, 2024, 22:25 PM</span>
            </div>
          </>
        )}
      </div>
      <div className="messages-message-input">
        <Input
          placeholder="Напишите сообщение..."
          forwardRef={inputSendMessage}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessageHandler(e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
        />
      </div>
    </>
  );
};

export default MessageContent;

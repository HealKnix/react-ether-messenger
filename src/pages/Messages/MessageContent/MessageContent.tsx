import AvatarText from '@/components/AvatarText/AvatarText';
import Input from '@/components/Input/Input';
import { useFetchMessages } from '@/hooks/api/useFetchMessages';
import { useFetchPeers } from '@/hooks/api/useFetchPeers';
import { useFetchUsers } from '@/hooks/api/useFetchUsers';
import { Message } from '@/models/Message';
import { useAuthStore } from '@/store/useAuthStore';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const MessageContent: FC = () => {
  const { id } = useParams();

  const paramsQuery = useMemo(() => {
    return {
      id: parseInt(id ?? '-1'),
    };
  }, [id]);

  const authStore = useAuthStore();
  const { messages, addMessage, getMessagesByPeerId } = useFetchMessages();
  const { peers, addPeer } = useFetchPeers();
  const { getUserById } = useFetchUsers();

  const currUser = useRef(getUserById(paramsQuery.id) ?? null);
  const userConversation = useRef(getUserById(paramsQuery.id ?? null));

  const [messagesConversation, setMessagesConversation] = useState(
    getMessagesByPeerId(paramsQuery.id ?? []),
  );

  const inputSendMessage = useRef<HTMLInputElement>(null);

  const messagesByDifferentUsers = useRef<Message[][]>([]);

  useEffect(() => {
    setMessagesConversation(getMessagesByPeerId(paramsQuery.id));
  }, [paramsQuery, messages, messagesByDifferentUsers]);

  useEffect(() => {
    messagesByDifferentUsers.current = [];

    userConversation.current = getUserById(paramsQuery.id);

    messagesConversation.forEach((message) => {
      const shouldRenderDiv: boolean =
        message.user?.id !== currUser.current?.id;

      if (shouldRenderDiv) {
        currUser.current = message.user;
        messagesByDifferentUsers.current.push([]);
      }

      messagesByDifferentUsers.current[
        messagesByDifferentUsers.current.length - 1
      ]?.push(message);
    });
  }, [getUserById, messagesConversation, paramsQuery, messages]);

  if (!userConversation.current)
    return <center>Выберите чат для общения</center>;

  return (
    <>
      <div className="messages-message-header">
        <AvatarText
          img={`${userConversation.current?.avatar}`}
          name={`${userConversation.current?.firstName} ${userConversation.current?.lastName}`}
          description={`Был${userConversation.current?.sex === 'f' ? 'а' : ''} актив${userConversation.current?.sex === 'f' ? 'на' : 'ен'} 20 мин. назад`}
        />
      </div>
      <div className="messages-message-messages">
        {messagesConversation.length === 0 && (
          <span>У вас нет переписки с этим пользователем</span>
        )}
        {messagesConversation.length !== 0 && (
          <>
            {messagesByDifferentUsers.current.map((messageArray, index) => {
              return (
                <div key={index}>
                  {messageArray.map((message) => {
                    const isOwnMessage: boolean =
                      authStore.user?.id === message.user?.id;

                    return (
                      <span
                        className={`bubble-message${isOwnMessage ? ' own' : ''}`}
                        key={message.id}
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
              addPeer({
                id: peers.length,
                peer_id: paramsQuery.id,
                type: 'user',
                message_id: messages?.length ?? -1,
              });
              addMessage({
                id: messages?.length ?? -1,
                text: e.currentTarget.value,
                date: new Date(),
                user: authStore.user,
                peer_id: paramsQuery.id,
              });
              e.currentTarget.value = '';
            }
          }}
        />
      </div>
    </>
  );
};

export default MessageContent;

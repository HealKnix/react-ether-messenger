import './MessageContent.scss';

import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import AvatarText from '@/components/AvatarText/AvatarText';
import Input from '@/components/Input/Input';
import { useFetchMessages } from '@/hooks/api/useFetchMessages';
import { useFetchPeers } from '@/hooks/api/useFetchPeers';
import { useFetchUsers } from '@/hooks/api/useFetchUsers';
import { Message } from '@/models/Message';
import { Peer } from '@/models/Peer';
import { User } from '@/models/User';
import { useAuthStore } from '@/store/useAuthStore';

interface MessageContentProps {
  updateLastMessage?: (peerId: number, message: string) => void;
}

const MessageContent: FC<MessageContentProps> = ({ updateLastMessage }) => {
  const { id } = useParams();

  const paramsQuery = useMemo(() => ({ id: parseInt(id ?? '-1') }), [id]);

  const authStore = useAuthStore();
  const { messages, addMessage, getMessagesByPeerId } = useFetchMessages();
  const { peers, addPeer } = useFetchPeers();
  const { getUserById } = useFetchUsers();

  const [userConversation, setUserConversation] = useState<
    User | undefined | null
  >(getUserById(paramsQuery.id));

  const [messagesByDifferentUsers, setMessagesByDifferentUsers] = useState<
    Message[][]
  >([]);

  const inputSendMessage = useRef<HTMLInputElement>(null);

  const sendMessageHandler = (text: string) => {
    const newMessage: Message = {
      id: messages?.length ?? -1,
      text: text,
      date: new Date(),
      user: authStore.user,
      peer_id: paramsQuery.id,
    };

    const newPeer: Peer = {
      id: peers.length,
      peer_id: paramsQuery.id,
      message_id: newMessage.id,
      type: 'user',
    };

    addMessage(newMessage);
    addPeer(newPeer);

    if (updateLastMessage) {
      updateLastMessage(paramsQuery.id, text);
    }
  };

  const organizeMessagesByUser = (messages: Message[]) => {
    let currentUserMessage: User | null = null;
    const groupedMessages: Message[][] = [];

    messages.forEach((message) => {
      if (message.user?.id !== currentUserMessage?.id) {
        currentUserMessage = message.user;
        groupedMessages.push([]);
      }
      groupedMessages[groupedMessages.length - 1].push(message);
    });

    return groupedMessages;
  };

  useEffect(() => {
    setUserConversation(getUserById(paramsQuery.id));

    const messagesConversation = getMessagesByPeerId(paramsQuery.id);

    setMessagesByDifferentUsers(organizeMessagesByUser(messagesConversation));
  }, [id, messages]);

  if (!userConversation) return <center>Выберите чат для общения</center>;

  return (
    <>
      <div className="messages-message-header">
        <AvatarText
          img={userConversation.avatar}
          name={`${userConversation.firstName} ${userConversation.lastName}`}
          description={`Был${userConversation.sex === 'f' ? 'а' : ''} актив${userConversation.sex === 'f' ? 'на' : 'ен'} 20 мин. назад`}
        />
      </div>
      <div className="messages-message-messages">
        {messagesByDifferentUsers.length === 0 ? (
          <span>У вас нет переписки с этим пользователем</span>
        ) : (
          messagesByDifferentUsers.map((messageArray, index) => (
            <div key={index}>
              {messageArray.map((message) => {
                const isOwnMessage = authStore.user?.id === message.user?.id;

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
          ))
        )}
        <div>
          <span className="message-date">Май 27, 2024, 22:25 PM</span>
        </div>
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

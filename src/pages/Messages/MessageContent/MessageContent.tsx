import AvatarText from '@/components/AvatarText/AvatarText';
import Input from '@/components/Input/Input';
import { useFetchMessages } from '@/hooks/api/useFetchMessages';
import { useFetchPeers } from '@/hooks/api/useFetchPeers';
import { useFetchUsers } from '@/hooks/api/useFetchUsers';
import { Message } from '@/models/Message';
import { User } from '@/models/User';
import { useAuthStore } from '@/store/useAuthStore';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

<<<<<<< HEAD
const MessageContent: FC = () => {
  const paramsQuery = useParams();
=======
interface MessageContentProps {
  user?: User | null;
  messages?: Message[] | null;
}
>>>>>>> 8d6366642bc0f448de7d414a7452f74ae24ed8f8

  const authStore = useAuthStore();
  const { messages, addMessage } = useFetchMessages();
  const { peers, addPeer } = useFetchPeers();
  const { getUserById } = useFetchUsers();

<<<<<<< HEAD
  const [userConversation, setUserConvesation] = useState(
    getUserById(parseInt(paramsQuery.id ?? '0')),
  );
  const currUser = useRef<User | null>(
    getUserById(parseInt(paramsQuery.id ?? '0')) ?? null,
  );
=======
  const currUser = useRef<User | null>(user ?? null);
>>>>>>> 8d6366642bc0f448de7d414a7452f74ae24ed8f8

  const inputSendMessage = useRef<HTMLInputElement>(null);

  const [diffMessages, setDiffMessages] = useState<Message[][]>([]);

  useEffect(() => {
    setUserConvesation(() => getUserById(parseInt(paramsQuery.id ?? '0')));
    console.log(userConversation);
  }, []);

  useMemo(() => {
    setDiffMessages([[]]);

    messages?.forEach((message) => {
      const shouldRenderDiv: boolean =
        message.user?.id !== currUser.current?.id;

      if (shouldRenderDiv) {
        currUser.current = message.user;
        setDiffMessages((diffMessages) => {
          diffMessages.push([]);
          return diffMessages;
        });
      }

      setDiffMessages((diffMessages) => {
        diffMessages[diffMessages.length - 1].push(message);
        return diffMessages;
      });
    });
  }, [messages]);

  if (!userConversation) return <center>Выберите чат для общения</center>;

  return (
    <>
      <div className="messages-message-header">
        <AvatarText
          img={`${userConversation?.avatar}`}
          name={`${userConversation?.firstName} ${userConversation?.lastName}`}
          description={`Был${userConversation.sex === 'f' ? 'а' : ''} актив${userConversation.sex === 'f' ? 'на' : 'ен'} 20 мин. назад`}
        />
      </div>
      <div className="messages-message-messages">
        {messages?.length === 0 && (
          <span>У вас нет переписки с этим пользователем</span>
        )}
        {messages?.length !== 0 && (
          <>
            {diffMessages.map((messageArray, index) => {
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
<<<<<<< HEAD
              addPeer({
                id: peers.length,
                peer_id: parseInt(paramsQuery.id ?? '0'),
                type: 'user',
                message_id: messages?.length ?? -1,
              });
              addMessage({
                id: messages?.length ?? -1,
                text: e.currentTarget.value,
                date: new Date(),
                user: authStore.user,
                peer_id: parseInt(paramsQuery.id ?? '0'),
              });
=======
              console.log(e.currentTarget.value);
>>>>>>> 8d6366642bc0f448de7d414a7452f74ae24ed8f8
              e.currentTarget.value = '';
            }
          }}
        />
      </div>
    </>
  );
};

export default MessageContent;

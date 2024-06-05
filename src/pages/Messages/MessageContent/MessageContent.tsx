import AvatarText from '@/components/AvatarText/AvatarText';
import Input from '@/components/Input/Input';
import { Message } from '@/models/Message';
import { User } from '@/models/User';
import { useAuthStore } from '@/store/useAuthStore';
import { FC, useMemo, useRef, useState } from 'react';

interface MessageContentProps {
  user: User | null;
  messages: Message[] | null;
}

const MessageContent: FC<MessageContentProps> = ({ user, messages }) => {
  const authStore = useAuthStore();

  const currUser = useRef<User | null>(user);

  const inputSendMessage = useRef<HTMLInputElement>(null);

  const [diffMessages, setDiffMessages] = useState<Message[][]>([]);

  useMemo(() => {
    setDiffMessages([[]]);

    messages?.forEach((message) => {
      const shouldRenderDiv: boolean = message.user.id !== currUser.current?.id;

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
    console.log(diffMessages);
  }, [messages]);

  if (!user) return <center>Выберите чат для общения</center>;

  return (
    <>
      <div className="messages-message-header">
        <AvatarText
          img={`${user?.avatar}`}
          name={`${user?.firstName} ${user?.lastName}`}
          description={`Был${user.sex === 'f' ? 'а' : ''} актив${user.sex === 'f' ? 'на' : 'ен'} 20 мин. назад`}
        />
      </div>
      <div className="messages-message-messages">
        {!messages && <span>У вас нет переписки с этим пользователем</span>}
        {messages &&
          diffMessages.map((messageArray, index) => {
            return (
              <div key={index}>
                {messageArray.map((message) => {
                  const isOwnMessage: boolean =
                    authStore.user?.id === message.user.id;

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
      </div>
      <div className="messages-message-input">
        <Input
          placeholder="Напишите сообщение..."
          forwardRef={inputSendMessage}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              console.log(e.currentTarget.value);
            }
          }}
        />
      </div>
    </>
  );
};

export default MessageContent;

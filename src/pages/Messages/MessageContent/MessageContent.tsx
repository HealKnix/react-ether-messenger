import AvatarText from '@/components/AvatarText/AvatarText';
import Input from '@/components/Input/Input';
import { Message } from '@/models/Message';
import { User } from '@/models/User';
import { useAuthStore } from '@/store/useAuthStore';
import { FC, useState } from 'react';

interface MessageContentProps {
  user: User | null;
  messages: Message[] | null;
}

const MessageContent: FC<MessageContentProps> = ({ user, messages }) => {
  const authStore = useAuthStore();

  let currUser: User | null = user;

  const diffMessages: Message[][] = [[]];
  let messageIndex = 0;

  if (messages) {
    messages.forEach((message) => {
      const shouldRenderDiv: boolean = message.user.id !== currUser?.id;

      if (shouldRenderDiv) {
        console.log(12313);

        currUser = message.user;
        messageIndex++;
      }

      diffMessages[messageIndex]?.push(message);
    });
    console.log(diffMessages);
  }

  if (!user) return <center>Выберите чат для общения</center>;

  return (
    <>
      <div className="messages-message-header">
        <AvatarText
          img={`${user?.avatar}`}
          name={`${user?.firstName} ${user?.lastName}`}
          description="Была активна 20 мин. назад"
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
                    <>
                      <span
                        className={`bubble-message${isOwnMessage ? ' own' : ''}`}
                        key={message.id}
                      >
                        {message.text}
                        <span className="bubble-message-time">
                          {message.date.toLocaleTimeString().slice(0, 5)}
                        </span>
                      </span>
                    </>
                  );
                })}
              </div>
            );
          })}
        {/* <div>
          <span className="bubble-message">
            Хмм
            <span className="bubble-message-time">22:34</span>
          </span>
          <span className="bubble-message">
            Кажется, я поняла
            <span className="bubble-message-time">22:34</span>
          </span>
          <span className="bubble-message">
            Если у меня возникнут вопросы, я обращусь в тех поддержку
            <span className="bubble-message-time">22:34</span>
          </span>
        </div>

        <div>
          <span className="bubble-message own">
            Просто
            <span className="bubble-message-time">22:32</span>
          </span>
          <span className="bubble-message own">
            Как в любом другом мессенджере пиши сообщения и отправляй их
            <span className="bubble-message-time">22:32</span>
          </span>
          <span className="bubble-message own">
            И бум!
            <span className="bubble-message-time">22:33</span>
          </span>
        </div>

        <div>
          <span className="bubble-message">
            А?
            <span className="bubble-message-time">22:30</span>
          </span>
          <span className="bubble-message">
            Круто
            <span className="bubble-message-time">22:30</span>
          </span>
          <span className="bubble-message">
            Как это работает?
            <span className="bubble-message-time">22:31</span>
          </span>
        </div>

        <div>
          <span className="message-date">Май 27, 2024, 22:30 PM</span>
        </div>

        <div>
          <span className="bubble-message own">
            Это основной шаблон чата
            <span className="bubble-message-time">22:25</span>
          </span>
        </div> */}
      </div>
      <div className="messages-message-input">
        <Input placeholder="Напишите сообщение..." />
      </div>
    </>
  );
};

export default MessageContent;

import { FC } from 'react';

import Input from '@/components/Input/Input';
import AvatarText from '@/components/AvatarText/AvatarText';
import { userList } from '@/models/mock/user';
import { User } from '@/models/User';

import './Messages.scss';

interface Message {
  id: number;
  user: User;
  lastMessage: string;
}

const Messages: FC = () => {
  const messageList: Message[] = [
    {
      id: 0,
      user: userList[0],
      lastMessage: 'Если у меня возникнут вопросы, я обращусь в тех поддержку',
    },
    {
      id: 1,
      user: userList[1],
      lastMessage: 'Погнали',
    },
    {
      id: 2,
      user: userList[2],
      lastMessage: 'Реальноо',
    },
    {
      id: 3,
      user: userList[3],
      lastMessage: 'Лол да, ты придешь на обед 13-го?',
    },
    {
      id: 4,
      user: userList[4],
      lastMessage: 'здорово наверстать упущенное за ужином!!!',
    },
    {
      id: 5,
      user: userList[5],
      lastMessage: 'да',
    },
    {
      id: 6,
      user: userList[6],
      lastMessage: 'Когда ты вернешься в город? Хотелось бы встретиться.',
    },
    {
      id: 7,
      user: userList[7],
      lastMessage: 'Спасибо!',
    },
    {
      id: 8,
      user: userList[8],
      lastMessage:
        'Джеку нужно найти няню для собаки, а я не знаю, кто подойдет.',
    },
  ];

  return (
    <>
      <div className="messages__wrapper">
        <div className="messages-user-list__wrapper">
          <div className="messages-user-list-search">
            <Input placeholder="Искать чат" />
          </div>
          <div className="messages-user-list">
            {messageList.map((message, index) => (
              <AvatarText
                key={message.id}
                selected={index === 0}
                img={message.user.avatar}
                name={`${message.user.firstName} ${message.user.lastName}`}
                description={message.lastMessage}
              />
            ))}
          </div>
        </div>
        <div className="messages-message__wrapper">
          <div className="messages-message-header">
            <AvatarText
              img={userList[0].avatar}
              name={`${userList[0].firstName} ${userList[0].lastName}`}
              description="Была активна 20 мин. назад"
            />
          </div>
          <div className="messages-message-messages">
            <div>
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
            </div>
          </div>
          <div className="messages-message-input">
            <Input placeholder="Напишите сообщение..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;

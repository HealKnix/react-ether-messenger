import { Message } from '../Message';
import { userList } from './user';

export const messageList: Message[] = [
  {
    id: 0,
    text: 'Это основной шаблон чата',
    user: userList[0],
    date: new Date('2024-06-04T22:25:32'),
    peer_id: 1,
  },
  {
    id: 1,
    text: 'А?',
    user: userList[1],
    date: new Date('2024-06-04T22:30:12'),
    peer_id: 1,
  },
  {
    id: 2,
    text: 'Круто',
    user: userList[1],
    date: new Date('2024-06-04T22:30:21'),
    peer_id: 1,
  },
  {
    id: 3,
    text: 'Как это работает?',
    user: userList[1],
    date: new Date('2024-06-04T22:31:03'),
    peer_id: 1,
  },
  {
    id: 4,
    text: 'Просто',
    user: userList[0],
    date: new Date('2024-06-04T22:32:15'),
    peer_id: 1,
  },
  {
    id: 5,
    text: 'Как в любом другом мессенджере пиши сообщения и отправляй их',
    user: userList[0],
    date: new Date('2024-06-04T22:32:25'),
    peer_id: 1,
  },
  {
    id: 6,
    text: 'И бум!',
    user: userList[0],
    date: new Date('2024-06-04T22:33:05'),
    peer_id: 1,
  },
  {
    id: 7,
    text: 'Хмм',
    user: userList[1],
    date: new Date('2024-06-04T22:34:09'),
    peer_id: 1,
  },
  {
    id: 8,
    text: 'Кажется, я поняла',
    user: userList[1],
    date: new Date('2024-06-04T22:34:18'),
    peer_id: 1,
  },
  {
    id: 9,
    text: 'Если у меня возникнут вопросы, я обращусь в тех поддержку',
    user: userList[1],
    date: new Date('2024-06-04T22:34:45'),
    peer_id: 1,
  },
  {
    id: 10,
    text: 'Погнали',
    user: userList[2],
    date: new Date('2024-06-04T22:34:45'),
    peer_id: 2,
  },
  {
    id: 11,
    text: 'Реальноо',
    user: userList[3],
    date: new Date('2024-06-04T22:34:45'),
    peer_id: 3,
  },
  {
    id: 12,
    text: 'Лол да, ты придешь на обед 13-го?',
    user: userList[4],
    date: new Date('2024-06-04T22:34:45'),
    peer_id: 4,
  },
  {
    id: 13,
    text: 'здорово наверстать упущенное за ужином!!!',
    user: userList[5],
    date: new Date('2024-06-04T22:34:45'),
    peer_id: 5,
  },
  {
    id: 14,
    text: 'да',
    user: userList[6],
    date: new Date('2024-06-04T22:34:45'),
    peer_id: 6,
  },
  {
    id: 15,
    text: 'Когда ты вернешься в город? Хотелось бы встретиться.',
    user: userList[7],
    date: new Date('2024-06-04T22:34:45'),
    peer_id: 7,
  },
  {
    id: 16,
    text: 'Спасибо!',
    user: userList[8],
    date: new Date('2024-06-04T22:34:45'),
    peer_id: 8,
  },
  {
    id: 17,
    text: 'Джеку нужно найти няню для собаки, а я не знаю, кто подойдет.',
    user: userList[9],
    date: new Date('2024-06-04T22:34:45'),
    peer_id: 9,
  },
];

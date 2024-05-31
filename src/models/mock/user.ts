import { User } from '@/models/User';

import UserAvatar1 from '@/assets/images/avatars/users/user1.png';
import UserAvatar2 from '@/assets/images/avatars/users/user2.png';
import UserAvatar3 from '@/assets/images/avatars/users/user3.png';
import UserAvatar4 from '@/assets/images/avatars/users/user4.png';
import UserAvatar5 from '@/assets/images/avatars/users/user5.png';

export const userList: User[] = [
  {
    id: 0,
    role: 'user',
    avatar: UserAvatar1,
    nickname: 'helenahils',
    firstName: 'Helena',
    lastName: 'Hills',
    email: 'helenahils@gmail.com',
    password: 'helen1997',
    sex: 'f',
    bio: 'Что-то на биографическом',
  },
  {
    id: 1,
    role: 'user',
    avatar: UserAvatar2,
    nickname: 'charlestran',
    firstName: 'Charles',
    lastName: 'Tran',
    email: 'charlestran@gmail.com',
    password: 'charles1997',
    sex: 'm',
    bio: 'Что-то на биографическом',
  },
  {
    id: 2,
    role: 'user',
    avatar: UserAvatar3,
    nickname: 'oscardavis',
    firstName: 'Oscar',
    lastName: 'Davis',
    email: 'oscardavis@gmail.com',
    password: 'oscar1997',
    sex: 'm',
    bio: 'Что-то на биографическом',
  },
  {
    id: 3,
    role: 'user',
    avatar: UserAvatar4,
    nickname: 'danielj',
    firstName: 'Daniel',
    lastName: 'Park',
    email: 'danielj@gmail.com',
    password: 'daniel1997',
    sex: 'm',
    bio: 'Что-то на биографическом',
  },
  {
    id: 4,
    role: 'user',
    avatar: UserAvatar5,
    nickname: 'carlorojas',
    firstName: 'Carlo',
    lastName: 'Rojas',
    email: 'carlorojas@gmail.com',
    password: 'carlo1997',
    sex: 'm',
    bio: 'Что-то на биографическом',
  },
];

import { User } from '@/models/User';
import { userList } from '@/models/mock/user';
import { useEffect, useState } from 'react';

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(() => userList);
  }, []);

  const addUser = (user: User) => {
    userList.push(user);
  };

  const getUserById = (id: number) => {
    return users.find((user) => user.id === id);
  };

  return { users, addUser, getUserById };
};

import { User } from '@/models/User';
import { userList } from '@/models/mock/user';
import { useEffect, useState } from 'react';

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(() => [...userList]);
  }, []);

  return users;
};

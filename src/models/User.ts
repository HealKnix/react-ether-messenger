export interface User {
  id: number;
  role: 'user' | 'admin';
  avatar: string;
  nickname: string;
  firstName: string;
  lastName: string;
  sex: string;
  email: string;
  password: string;
  links: string[];
  bio: string;
}

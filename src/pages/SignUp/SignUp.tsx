import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

import GoogleSVG from '@/assets/google.svg';

import { useAuthStore } from '@/store/useAuthStore';
import { userList } from '@/models/mock/user';

import './SignUp.scss';
import { useFetchUsers } from '@/hooks/api/useFetchUsers';
import { User } from '@/models/User';

const SignUp: FC = () => {
  const navigate = useNavigate();
  const users = useFetchUsers();
  const authStore = useAuthStore();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  return (
    <>
      <div className="sign-up__wrapper">
        <div className="sign-up">
          <div className="sign-up-text">
            <span className="sign-up-title">Регистрация</span>
            <span className="sign-up-description">
              Введите свой e-mail, чтобы зарегистрироваться в этом приложении
            </span>
          </div>

          <form
            method=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              type="email"
              title="Почта"
              value={inputEmail}
              onChange={(e) => setInputEmail(() => e.target.value)}
              movablePlaceholder
              required
            />
            <Input
              type="password"
              title="Пароль"
              value={inputPassword}
              onChange={(e) => setInputPassword(() => e.target.value)}
              movablePlaceholder
              required
            />
            <Button
              onClick={() => {
                const newUser: User = {
                  id: users.length,
                  firstName: 'Test',
                  lastName: 'Testovich',
                  avatar: '',
                  email: inputEmail,
                  password: inputPassword,
                  links: [],
                  nickname: `test${users.length}`,
                  role: 'user',
                  sex: 'm',
                  bio: 'test',
                };
                userList.push(newUser);
                authStore.setUser(newUser);
                localStorage.setItem('user', JSON.stringify(newUser));
                navigate('/', { replace: true });
              }}
            >
              Зарегистрироваться
            </Button>
            <Button
              color="black"
              onClick={() => {
                const newUser: User = {
                  id: users.length,
                  firstName: 'Test',
                  lastName: 'Testovich',
                  avatar: '',
                  email: `www.test${users.length}@gmail.com`,
                  password: 'test',
                  links: [],
                  nickname: `test${users.length}`,
                  role: 'user',
                  sex: 'm',
                  bio: 'test',
                };
                userList.push(newUser);
                authStore.setUser(newUser);
                localStorage.setItem('user', JSON.stringify(newUser));
                navigate('/', { replace: true });
              }}
            >
              Регистрация тестового пользователя
            </Button>
          </form>

          <div className="sign-up-divider">
            <hr />
            <span>или</span>
            <hr />
          </div>

          <Button color="light">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
              }}
            >
              <img src={GoogleSVG} alt="google" />
              Google
            </div>
          </Button>

          <div className="sign-up-functional">
            <Link to={'/'}>Уже есть аккаунт?</Link>
          </div>

          <div className="sign-up-functional">
            Регистрируясь, вы соглашаетесь с нашими{' '}
            <Link to={'/sign-up'}>Условиями предоставления услуг</Link> и{' '}
            <Link to={'/sign-up'}>Политикой конфиденциальности</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

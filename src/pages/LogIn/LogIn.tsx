import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

import GoogleSVG from '@/assets/google.svg';

import { useAuthStore } from '@/store/useAuthStore';
import { userList } from '@/models/mock/user';

import './LogIn.scss';
import { useFetchUsers } from '@/hooks/api/useFetchUsers';

const LogIn: FC = () => {
<<<<<<< HEAD
  const { users } = useFetchUsers();
=======
  const users = useFetchUsers();
>>>>>>> 8d6366642bc0f448de7d414a7452f74ae24ed8f8
  const authStore = useAuthStore();
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  return (
    <>
      <div className="login__wrapper">
        <div className="login">
          <div className="login-text">
            <span className="login-title">Вход</span>
            <span className="login-description">
              Введите свой e-mail и почту, чтобы войти в это приложение
            </span>
          </div>

          <form
            autoComplete="false"
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
                if (!inputEmail || !inputPassword) return;

                users.forEach((user) => {
                  if (
                    user.email === inputEmail &&
                    user.password === inputPassword
                  ) {
                    authStore.setUser(user);
                    localStorage.setItem('user', JSON.stringify(user));
                    navigate('/', { replace: true });
                  }
                });

                if (!authStore.isAuth()) {
                  alert('Такого пользователя не существует');
                }
              }}
            >
              Войти
            </Button>
            <Button
              color="black"
              onClick={() => {
                authStore.setUser(userList[0]);
                localStorage.setItem('user', JSON.stringify(userList[0]));
                navigate('/', { replace: true });
              }}
            >
              Вход под тестовым пользователем
            </Button>
          </form>

          <div className="login-divider">
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

          <div className="login-functional">
            <Link to={'/sign-up'}>Зарегистрироваться</Link>
            <Link to={'/restore-password'}>Не помните пароль?</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;

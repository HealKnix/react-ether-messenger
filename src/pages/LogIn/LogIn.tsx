import { FC } from 'react';
import { Link } from 'react-router-dom';

import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

import GoogleSVG from '@/assets/google.svg';

import { useAuthStore } from '@/store/useAuthStore';
import { userList } from '@/models/mock/user';

import './LogIn.scss';

const LogIn: FC = () => {
  const authStore = useAuthStore();

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
            method=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input type="email" title="Почта" movablePlaceholder required />
            <Input type="password" title="Пароль" movablePlaceholder required />
            <Button>Войти</Button>
            <Button
              color="black"
              onClick={() => {
                authStore.setUser(userList[0]);
                localStorage.setItem('user', JSON.stringify(userList[0]));
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

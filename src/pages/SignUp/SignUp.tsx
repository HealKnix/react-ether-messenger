import { FC } from 'react';
import { Link } from 'react-router-dom';

import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

import GoogleSVG from '@/assets/google.svg';

import { useAuthStore } from '@/store/useAuthStore';
import { userList } from '@/models/mock/user';

import './SignUp.scss';

const SignUp: FC = () => {
  const authStore = useAuthStore();

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
            <Input type="email" title="Почта" movablePlaceholder required />
            <Input type="password" title="Пароль" movablePlaceholder required />
            <Button>Зарегистрироваться</Button>
            <Button
              color="black"
              onClick={() => {
                authStore.setUser(userList[0]);
                localStorage.setItem('user', JSON.stringify(userList[0]));
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

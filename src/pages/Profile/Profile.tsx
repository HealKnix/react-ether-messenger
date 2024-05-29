import { FC } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { userList } from '../../models/mock/user';
import './Profile.scss';

const Profile: FC = () => {
  const authStore = useAuthStore();
  return (
    <>
      <div className="profile__wrapper">
        <span>Profile Page</span>
        123123132
        <p>
          {authStore.isAuth() && <span>Вы авторизованы</span>}
          {!authStore.isAuth() && <span>Вы не авторизованы</span>}
        </p>
        <p>
          Ваша роль{' '}
          {(authStore.isUser() && <span>Юзер</span>) ||
            (authStore.isAdmin() && <span>Админ</span>)}
          !
        </p>
        <pre>{JSON.stringify(authStore.user, null, 2)}</pre>
        <button onClick={() => authStore.setUser(userList[0])}>
          Авторизоваться
        </button>
        <button onClick={() => authStore.setUser(null)}>Выйти</button>
      </div>
    </>
  );
};

export default Profile;

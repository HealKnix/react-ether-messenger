import { FC } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { userList } from '../../models/mock/user';

const Profile: FC = () => {
  const { user, setUser } = useAuthStore();
  return (
    <>
      <div>
        <span>Profile Page</span>
        123123132
        <p>
          {user && <span>Вы авторизованы</span>}
          {!user && <span>Вы не авторизованы</span>}
        </p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <button onClick={() => setUser(userList[0])}>Авторизоваться</button>
      </div>
    </>
  );
};

export default Profile;

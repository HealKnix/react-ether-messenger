import { FC } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import './Profile.scss';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea/TextArea';

const Profile: FC = () => {
  const authStore = useAuthStore();
  return (
    <>
      <div className="profile__wrapper">
        <span className="profile-title">Редактировать профиль</span>
        <div className="profile-avatar-text">
          <div
            className="profile-avatar"
            style={{
              backgroundImage: `url(${authStore.user?.avatar})`,
            }}
          ></div>
          <div className="profile-text">
            <div className="profile__user-name">{`${authStore.user?.firstName} ${authStore.user?.lastName}`}</div>
            <div className="profile__change-photo link">
              Изменить фото профиля
            </div>
          </div>
        </div>

        <Input
          id="nickname-input"
          title="Никнейм"
          value={`@${authStore.user?.nickname}` ?? '@'}
        />
        <Input
          id="email-input"
          title="Почта"
          value={authStore.user?.email ?? ''}
        />
        <Input id="links-input" title="Ссылки">
          <Input id="links-input" value="website.net"></Input>
          <Input value="mylink.net"></Input>
          <Input value="yourlink.net"></Input>
          <Button color="black">Добавить ещё</Button>
        </Input>
        <TextArea
          id="bio-input"
          title="Биография"
          value={authStore.user?.bio ?? ''}
        />
        <Button>Сохранить изменения</Button>
      </div>
    </>
  );
};

export default Profile;

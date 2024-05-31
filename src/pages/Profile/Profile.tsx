import { FC } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import './Profile.scss';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea/TextArea';
import { useAccentColorTheme } from '../../store/useAccentColorTheme';
import RadioForm from '../../components/RadioForm/RadioForm';
import { useModalStore } from '../../store/useModalStore';

const Profile: FC = () => {
  const authStore = useAuthStore();
  const modalStore = useModalStore();
  const accentColorTheme = useAccentColorTheme();
  return (
    <>
      <div className="profile__wrapper">
        <span className="profile-title">Редактировать профиль</span>
        <div className="profile-avatar-text">
          <div className="avatar-text">
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
          <Button color="red" onClick={() => modalStore.openProfileModal()}>
            Выйти из аккаунта
          </Button>
        </div>

        <RadioForm
          idName="theme"
          title="Выберите цвет приложения"
          values={accentColorTheme.colorVariants}
          value={accentColorTheme.color}
          onChange={(e) => {
            accentColorTheme.setColor(e.target.value);
          }}
        />

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

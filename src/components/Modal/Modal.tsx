import { FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import './Modal.scss';
import { useModalStore } from '../../store/useModalStore';
import Button from '../Button/Button';
import { useAuthStore } from '../../store/useAuthStore';

const Modal: FC = () => {
  const dialog = useRef<HTMLDialogElement>();
  const authStore = useAuthStore();
  const modalStore = useModalStore();

  useEffect(() => {
    if (modalStore.profileModal) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [modalStore.profileModal, dialog, modalStore]);

  useEffect(() => {
    const clickDialogHandler = dialog.current?.addEventListener(
      'click',
      (e: MouseEvent) => {
        const dialogHTML = e.target as HTMLDialogElement;

        if (dialogHTML.id === 'dialog') {
          modalStore.closeProfileModal();
        }
      },
    );

    return removeEventListener('click', clickDialogHandler);
  }, []);

  return createPortal(
    <>
      <dialog id="dialog" ref={dialog} tabIndex={-1}>
        <div className="modal-content" tabIndex={0}>
          <h1>Выход</h1>
          <hr />
          <h4>Вы точно хотите выйти?</h4>
          <div>
            <Button
              onClick={() => {
                modalStore.closeProfileModal();
                authStore.setUser(null);
                localStorage.removeItem('user');
              }}
            >
              Да
            </Button>
            <Button
              color="black"
              onClick={() => {
                modalStore.closeProfileModal();
              }}
            >
              Нет
            </Button>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal'),
  );
};

export default Modal;

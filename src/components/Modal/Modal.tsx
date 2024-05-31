import { FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import Button from '../Button/Button';

import { useModalStore } from '../../store/useModalStore';
import { useAuthStore } from '../../store/useAuthStore';

import './Modal.scss';

const Modal: FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const authStore = useAuthStore();
  const modalStore = useModalStore();

  useEffect(() => {
    if (modalStore.profileModal) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [modalStore.profileModal]);

  useEffect(() => {
    const clickDialogHandler = (e: MouseEvent) => {
      const dialogHTML = e.target as HTMLDialogElement;

      if (dialogHTML.id === 'dialog') {
        modalStore.closeProfileModal();
      }
    };

    dialogRef.current?.addEventListener('click', clickDialogHandler);

    return () => {
      dialogRef.current?.removeEventListener('click', clickDialogHandler);
    };
  }, [dialogRef, modalStore]);

  return createPortal(
    <>
      <dialog
        id="dialog"
        ref={dialogRef}
        tabIndex={-1}
        aria-label="Exit confirmation"
      >
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
    document.getElementById('modal')!,
  );
};

export default Modal;

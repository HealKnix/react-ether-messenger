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
        e.preventDefault();
        modalStore.closeProfileModal();
      }
    };

    const keyDownDialogHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        modalStore.closeProfileModal();
      }
    };

    dialogRef.current?.addEventListener('mouseup', clickDialogHandler);
    dialogRef.current?.addEventListener('keydown', keyDownDialogHandler);

    return () => {
      dialogRef.current?.removeEventListener('mouseup', clickDialogHandler);
      dialogRef.current?.removeEventListener('keydown', keyDownDialogHandler);
    };
  }, [dialogRef, modalStore]);

  return createPortal(
    <>
      <dialog id="dialog" ref={dialogRef} tabIndex={-1}>
        <div className="modal-content" tabIndex={0}>
          <div className="modal-header">
            <span className="modal-title">Выход</span>
            <Button
              color="white"
              onClick={() => modalStore.closeProfileModal()}
            >
              <img src="/src/assets/cross.svg" alt="cross" width={16} />
            </Button>
          </div>
          <hr />
          <span className="modal-description">Вы точно хотите выйти?</span>
          <div className="modal-buttons">
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

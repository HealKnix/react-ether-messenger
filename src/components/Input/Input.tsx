import { FC } from 'react';
import './Input.scss';

interface ButtonProps {
  id?: string;
  title?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'button' | 'submit' | 'reset';
  required?: boolean;
  value?: string | number;
  children?: string | JSX.Element | JSX.Element[];
  movablePlaceholder?: boolean;

  forwardRef?: React.Ref<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit?: React.FormEventHandler<HTMLInputElement> | undefined;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}

const Input: FC<ButtonProps> = ({
  id,
  placeholder,
  title,
  type,
  required,
  value,
  children,
  movablePlaceholder,
  forwardRef,
  onChange,
  onSubmit,
  onKeyDown,
}) => {
  return (
    <>
      <label htmlFor={id} className="input__wrapper">
        {title && (
          <span
            className={
              movablePlaceholder
                ? 'input-title--movable-placeholder'
                : 'input-title'
            }
          >
            {title}
          </span>
        )}
        {children ? (
          children
        ) : (
          <input
            id={id}
            className="input"
            type={type}
            value={value}
            required={required}
            placeholder={movablePlaceholder ? '' : placeholder}
            ref={forwardRef}
            onChange={onChange ?? (() => {})}
            onSubmit={onSubmit}
            onKeyDown={onKeyDown}
          />
        )}
      </label>
    </>
  );
};

export default Input;

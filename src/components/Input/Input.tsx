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
          />
        )}
      </label>
    </>
  );
};

export default Input;

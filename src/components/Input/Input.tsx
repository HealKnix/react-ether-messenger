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
}

const Input: FC<ButtonProps> = ({
  id,
  placeholder,
  title,
  type,
  required,
  value,
  children,
}) => {
  return (
    <>
      <label htmlFor={id} className="input__wrapper">
        {title}
        {children ? (
          children
        ) : (
          <input
            id={id}
            className="input"
            type={type}
            value={value}
            required={required}
            placeholder={placeholder}
          />
        )}
      </label>
    </>
  );
};

export default Input;

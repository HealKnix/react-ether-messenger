import { FC } from 'react';
import './Input.scss';

interface ButtonProps {
  id?: string;
  title?: string;
  value?: string | number;
  children?: string | JSX.Element | JSX.Element[];
}

const Input: FC<ButtonProps> = ({ id, title, value, children }) => {
  return (
    <>
      <label htmlFor={id} className="input__wrapper">
        {title}
        {children ? (
          children
        ) : (
          <input id={id} className="input" type="text" value={value} />
        )}
      </label>
    </>
  );
};

export default Input;

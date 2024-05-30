import { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  color?: 'accent' | 'light' | 'black' | 'red';
  children?: string | JSX.Element | JSX.Element[];
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ color = 'accent', children, onClick }) => {
  return (
    <button className={color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

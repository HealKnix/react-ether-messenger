import { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  color?: 'accent' | 'black';
  children?: string | JSX.Element | JSX.Element[];
}

const Button: FC<ButtonProps> = ({ color = 'accent', children }) => {
  return (
    <>
      <button className={color}>{children}</button>
    </>
  );
};

export default Button;

import { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  color?: 'accent' | 'light' | 'black' | 'red';
  children?: string | JSX.Element | JSX.Element[];
  onChange?: () => void;
}

const Button: FC<ButtonProps> = ({ color = 'accent', children, onChange }) => {
  return (
    <>
      <button className={color} onClick={onChange}>
        {children}
      </button>
    </>
  );
};

export default Button;

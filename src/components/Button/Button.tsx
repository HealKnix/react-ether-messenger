import { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  color?: 'accent' | 'light' | 'black' | 'red' | 'white';
  children?: string | JSX.Element | JSX.Element[];
  onClick?: (e: unknown) => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  color = 'accent',
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={color + (className ? ` ${className}` : '')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

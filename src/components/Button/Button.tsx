import { FC } from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

interface ButtonProps {
  color?: 'accent' | 'light' | 'black' | 'red';
  children?: string | JSX.Element | JSX.Element[];
  href?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  color = 'accent',
  children,
  href,
  onClick,
}) => {
  return href ? (
    <Link tabIndex={-1} to={href}>
      <button className={color} onClick={onClick}>
        {children}
      </button>
    </Link>
  ) : (
    <button className={color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

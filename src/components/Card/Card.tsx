import './Card.scss';

import { FC } from 'react';

interface CardProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <>
      <div className="content-block">
        <span className="content-block__title">{title}</span>
        <span className="content-block__content">{children}</span>
      </div>
    </>
  );
};

export default Card;

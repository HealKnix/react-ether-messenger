import { FC } from 'react';
import './AvatarText.scss';

interface AvatarTextProps {
  img: string;
  imgSize?: number;
  name: string;
  nameSize?: number;
  selected?: boolean;
  description: string;
  descriptionSize?: number;
  onClick?: (e: unknown) => void;
}

const AvatarText: FC<AvatarTextProps> = ({
  img,
  name,
  description,
  selected,
  onClick,
}) => {
  return (
    <>
      <div
        className={`avatar-text__wrapper ${selected ? 'selected' : ''}`}
        onClick={onClick}
      >
        <div
          className="avatar-img"
          style={{
            backgroundImage: `url('${img}')`,
          }}
        ></div>
        <div className="avatar-text">
          <span className="avatar-text__name">{name}</span>
          <span className="avatar-text__description">{description}</span>
        </div>
      </div>
    </>
  );
};

export default AvatarText;

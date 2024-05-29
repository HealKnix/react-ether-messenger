import { FC } from "react";
import "./AvatarText.css";

interface AvatarTextProps {
  img: string;
  imgSize?: number;
  name: string;
  nameSize?: number;
  description: string;
  descriptionSize?: number;
}

const AvatarText: FC<AvatarTextProps> = ({ img, name, description }) => {
  return (
    <>
      <div className="avatar-text__wrapper">
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

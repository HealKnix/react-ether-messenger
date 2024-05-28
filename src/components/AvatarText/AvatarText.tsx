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

const AvatarText: FC<AvatarTextProps> = ({
  img,
  imgSize,
  name,
  nameSize,
  description,
  descriptionSize,
}) => {
  return (
    <>
      <div className="avatar-text__wrapper">
        <div
          className="avatar-img"
          style={{
            width: `${imgSize ?? 48}px`,
            height: `${imgSize ?? 48}px`,
            backgroundImage: `url('${img}')`,
          }}
        ></div>
        <div className="avatar-text">
          <span
            className="avatar-text__name"
            style={{
              fontSize: `${nameSize ?? 16}px`,
            }}
          >
            {name}
          </span>
          <span
            className="avatar-text__description"
            style={{
              fontSize: `${descriptionSize ?? 16}px`,
            }}
          >
            {description}
          </span>
        </div>
      </div>
    </>
  );
};

export default AvatarText;

import { FC } from "react";
import AvatarText from "../../../components/AvatarText/AvatarText";
import Card from "../../../components/Card/Card";
import "./HomeAsideContent.css";

const HomeAsideContent: FC = () => {
  return (
    <>
      <div className="aside-content__wrapper">
        <Card title="Возможные друзья">
          <AvatarText
            img="src/assets/images/avatars/users/user1.png"
            name="Helena Hills"
            description="@helenahills"
          />
          <AvatarText
            img="src/assets/images/avatars/users/user2.png"
            name="Charles Tran"
            description="@charlestran"
          />
          <AvatarText
            img="src/assets/images/avatars/users/user3.png"
            name="Oscar Davis"
            description="@oscardavis"
          />
          <AvatarText
            img="src/assets/images/avatars/users/user4.png"
            name="Daniel Jay Park"
            description="@danielj"
          />
          <AvatarText
            img="src/assets/images/avatars/users/user5.png"
            name="Carlo Rojas"
            description="@carlorojas"
          />
        </Card>
        <Card title="Сообщества, которые могут вам понравиться">
          <AvatarText
            img="src/assets/images/avatars/communities/community1.png"
            name="Design Enthusiasts"
            description="13.2k участников"
          />
          <AvatarText
            img="src/assets/images/avatars/communities/community2.png"
            name="Photographers of SF"
            description="2k участников"
          />
          <AvatarText
            img="src/assets/images/avatars/communities/community3.png"
            name="Marina crew"
            description="125 участников"
          />
        </Card>
      </div>
    </>
  );
};

export default HomeAsideContent;

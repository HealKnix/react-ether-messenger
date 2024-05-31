import { FC } from 'react';
import AvatarText from '@/components/AvatarText/AvatarText';
import Card from '@/components/Card/Card';

import UserAvatar1 from '@//assets/images/avatars/users/user1.png';
import UserAvatar2 from '@//assets/images/avatars/users/user2.png';
import UserAvatar3 from '@//assets/images/avatars/users/user3.png';
import UserAvatar4 from '@//assets/images/avatars/users/user4.png';
import UserAvatar5 from '@//assets/images/avatars/users/user5.png';

import CommunityAvatar1 from '@//assets/images/avatars/communities/community1.png';
import CommunityAvatar2 from '@//assets/images/avatars/communities/community2.png';
import CommunityAvatar3 from '@//assets/images/avatars/communities/community3.png';

import './HomeAsideContent.scss';

const HomeAsideContent: FC = () => {
  return (
    <>
      <div className="aside-content__wrapper">
        <Card title="Возможные друзья">
          <AvatarText
            img={UserAvatar1}
            name="Helena Hills"
            description="@helenahills"
          />
          <AvatarText
            img={UserAvatar2}
            name="Charles Tran"
            description="@charlestran"
          />
          <AvatarText
            img={UserAvatar3}
            name="Oscar Davis"
            description="@oscardavis"
          />
          <AvatarText
            img={UserAvatar4}
            name="Daniel Jay Park"
            description="@danielj"
          />
          <AvatarText
            img={UserAvatar5}
            name="Carlo Rojas"
            description="@carlorojas"
          />
        </Card>
        <Card title="Сообщества, которые могут вам понравиться">
          <AvatarText
            img={CommunityAvatar1}
            name="Design Enthusiasts"
            description="13.2k участников"
          />
          <AvatarText
            img={CommunityAvatar2}
            name="Photographers of SF"
            description="2k участников"
          />
          <AvatarText
            img={CommunityAvatar3}
            name="Marina crew"
            description="125 участников"
          />
        </Card>
      </div>
    </>
  );
};

export default HomeAsideContent;

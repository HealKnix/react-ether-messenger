import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeSVG from '@/components/SVG/HomeSVG';
import FriendsSVG from '@/components/SVG/FriendsSVG';
import MessageSVG from '@/components/SVG/MessageSVG';
import { useAuthStore } from '@/store/useAuthStore';
import BellSVG from '@/components/SVG/BellSVG';

import './MobileSidebarMenu.scss';

const MobileSidebarMenu: FC = () => {
  const location = useLocation();
  const authStore = useAuthStore();

  return (
    <>
      <div className="bottom-menu">
        <ul className="bottom-menu__nav">
          <li>
            <Link
              to="/home"
              className={'/home' === location.pathname ? 'active nav' : 'nav'}
            >
              <HomeSVG />
            </Link>
          </li>
          <li>
            <Link
              to="/friends"
              className={
                '/friends' === location.pathname ? 'active nav' : 'nav'
              }
            >
              <FriendsSVG />
            </Link>
          </li>
          <li>
            <Link
              to="/messenger"
              className={
                '/messenger' === location.pathname ? 'active nav' : 'nav'
              }
            >
              <MessageSVG />
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className={
                '/notifications' === location.pathname ? 'active nav' : 'nav'
              }
            >
              <BellSVG />
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={
                '/profile' === location.pathname ? 'active nav' : 'nav'
              }
            >
              <div
                className="avatar-nav"
                style={{
                  backgroundImage: `url(${authStore.user?.avatar})`,
                }}
              ></div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileSidebarMenu;

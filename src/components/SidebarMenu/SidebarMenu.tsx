import { FC } from 'react';
import './SidebarMenu.scss';
import { Link, useLocation } from 'react-router-dom';
import { router } from '@/routes';
import Logo from '@/components/Logo/Logo';
import HomeSVG from '../SVG/HomeSVG';
import FriendsSVG from '../SVG/FriendsSVG';
import MessageSVG from '../SVG/MessageSVG';
import { useAuthStore } from '@/store/useAuthStore';
import BellSVG from '../SVG/BellSVG';

const SidebarMenu: FC = () => {
  const location = useLocation();
  const authStore = useAuthStore();

  return (
    <>
      <div className="side-bar-menu">
        <div className="sticky-menu">
          <Logo />

          <ul className="side-bar-menu__nav desktop-nav">
            {router
              .filter((route) => route.show)
              .sort((a, b) => a.order - b.order)
              .map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className={
                      route.path === location.pathname
                        ? `active nav-${route.name} nav`
                        : `nav-${route.name} nav`
                    }
                  >
                    {<route.icon />}
                    <span>{route.title}</span>
                  </Link>
                </li>
              ))}
          </ul>

          <ul className="bottom-menu__nav mobile-nav">
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
      </div>
    </>
  );
};

export default SidebarMenu;

import { FC } from 'react';
import './SidebarMenu.scss';
import { Link, useLocation } from 'react-router-dom';
import { router } from '../../routes';
import Logo from '../Logo/Logo';

const SidebarMenu: FC = () => {
  const location = useLocation();

  return (
    <>
      <div className="side-bar-menu">
        <div className="sticky-menu">
          <Logo />

          <ul className="side-bar-menu__nav">
            {router
              .filter((route) => route.show)
              .sort((a, b) => a.order - b.order)
              .map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className={
                      route.path === location.pathname
                        ? `active nav-${route.name}`
                        : `nav-${route.name}`
                    }
                  >
                    {<route.icon />}
                    <span>{route.title}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;

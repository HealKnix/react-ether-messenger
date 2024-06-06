import './SidebarMenu.scss';

import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '@/components/Logo/Logo';
import { router } from '@/routes';

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
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
              .map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className={
                      location.pathname.includes(route.path)
                        ? `active nav-${route.name} nav`
                        : `nav-${route.name} nav`
                    }
                  >
                    {route.icon && <route.icon />}
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

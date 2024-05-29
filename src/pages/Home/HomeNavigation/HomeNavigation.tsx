import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HomeNavigation.scss';

const HomeNavigation: FC = () => {
  const location = useLocation();

  return (
    <>
      <div className="home-nav">
        <ul>
          <li>
            <Link
              to="/home?filter=for-you"
              className={
                '' == location.search || '?filter=for-you' == location.search
                  ? 'active'
                  : ''
              }
            >
              Для вас
            </Link>
          </li>
          <li>
            <Link
              to="/home?filter=subscribes"
              className={
                '?filter=subscribes' == location.search ? 'active' : ''
              }
            >
              Подписки
            </Link>
          </li>
          <li>
            <Link
              to="/home?filter=favorites"
              className={'?filter=favorites' == location.search ? 'active' : ''}
            >
              Избранное
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeNavigation;

import './Home.scss';

import { FC } from 'react';

import HomeAsideContent from './HomeAsideContent/HomeAsideContent';
import HomeNavigation from './HomeNavigation/HomeNavigation';
import HomePosts from './HomePosts/HomePosts';

const Home: FC = () => {
  return (
    <>
      <div className="home__wrapper">
        <HomeNavigation />
        <div className="home-content__wrapper">
          <HomePosts />
          <HomeAsideContent />
        </div>
      </div>
    </>
  );
};

export default Home;

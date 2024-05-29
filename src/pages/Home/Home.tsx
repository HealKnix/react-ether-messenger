import { FC } from 'react';
import HomeNavigation from './HomeNavigation/HomeNavigation';
import HomeAsideContent from './HomeAsideContent/HomeAsideContent';
import HomePosts from './HomePosts/HomePosts';
import './Home.scss';

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

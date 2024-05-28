import { FC } from "react";
import HomeNavigation from "./HomeNavigation/HomeNavigation";
import "./Home.css";
import HomeAsideContent from "./HomeAsideContent/HomeAsideContent";

const Home: FC = () => {
  return (
    <>
      <div className="home__wrapper">
        <HomeNavigation />
        <div className="home-content__wrapper">
          <div className="posts__wrapper"></div>
          <HomeAsideContent />
        </div>
      </div>
    </>
  );
};

export default Home;

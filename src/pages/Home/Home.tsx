import { FC } from "react";
import HomeNavigation from "./HomeNavigation/HomeNavigation";
import HomeAsideContent from "./HomeAsideContent/HomeAsideContent";
import "./Home.css";

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

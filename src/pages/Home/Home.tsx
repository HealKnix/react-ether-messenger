import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";

const Home: FC = () => {
  const location = useLocation();

  return (
    <>
      <div className="home__wrapper">
        <div className="home-nav">
          <ul>
            <li>
              <Link
                to="home?filter=main"
                className={
                  "" == location.search || "?filter=main" == location.search
                    ? "active"
                    : ""
                }
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="home?filter=subscribes"
                className={
                  "?filter=subscribes" == location.search ? "active" : ""
                }
              >
                Подписки
              </Link>
            </li>
            <li>
              <Link
                to="home?filter=research"
                className={
                  "?filter=research" == location.search ? "active" : ""
                }
              >
                Исследовать
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;

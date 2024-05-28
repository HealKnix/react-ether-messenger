import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HomeNavigation.css";

const HomeNavigation: FC = () => {
  const location = useLocation();

  return (
    <>
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
              className={"?filter=research" == location.search ? "active" : ""}
            >
              Исследовать
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeNavigation;

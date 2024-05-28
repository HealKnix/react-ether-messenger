import { FC } from "react";
import Logo from "../../components/Logo/Logo";
import ProfileSVG from "../SVG/ProfileSVG";
import HomeSVG from "../SVG/HomeSVG";
import MessageSVG from "../SVG/MessageSVG";
import SearchSVG from "../SVG/SearchSVG";
import BellSVG from "../SVG/BellSVG";
import BookmarkSVG from "../SVG/BookmarkSVG";
import "./SidebarMenu.css";
import { Link, useLocation } from "react-router-dom";

const SidebarMenu: FC = () => {
  const location = useLocation();

  return (
    <>
      <div className="side-bar-menu">
        <div className="sticky-menu">
          <Logo />

          <ul className="side-bar-menu__nav">
            <li>
              <Link
                to="/profile"
                className={"/profile" == location.pathname ? "active" : ""}
              >
                <ProfileSVG />
                Профиль
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className={
                  "/" == location.pathname || "/home" == location.pathname
                    ? "active"
                    : ""
                }
              >
                <HomeSVG />
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="/messenger"
                className={"/messenger" == location.pathname ? "active" : ""}
              >
                <MessageSVG />
                Мессенджер
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className={"/search" == location.pathname ? "active" : ""}
              >
                <SearchSVG />
                Поиск
              </Link>
            </li>
            <li>
              <Link
                to="/notifications"
                className={
                  "/notifications" == location.pathname ? "active" : ""
                }
              >
                <BellSVG />
                Уведомления
              </Link>
            </li>
            <li>
              <Link
                to="/saved-posts"
                className={"/saved-posts" == location.pathname ? "active" : ""}
              >
                <BookmarkSVG />
                Сохранённые посты
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;

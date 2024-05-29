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
                <span>Профиль</span>
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
                <span>Главная</span>
              </Link>
            </li>
            <li>
              <Link
                to="/messenger"
                className={"/messenger" == location.pathname ? "active" : ""}
              >
                <MessageSVG />
                <span>Мессенджер</span>
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className={"/search" == location.pathname ? "active" : ""}
              >
                <SearchSVG />
                <span>Поиск</span>
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
                <span>Уведомления</span>
              </Link>
            </li>
            <li>
              <Link
                to="/saved-posts"
                className={"/saved-posts" == location.pathname ? "active" : ""}
              >
                <BookmarkSVG />
                <span>Сохранённые посты</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;

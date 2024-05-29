import Home from "../pages/Home/Home";
import { FC } from "react";
import Profile from "../pages/Profile/Profile";
import Messenger from "../pages/Messenger/Messenger";
import Search from "../pages/Search/Search";
import Notifications from "../pages/Notifications/Notifications";
import SavedPosts from "../pages/SavedPosts/SavedPosts";
import HomeSVG from "../components/SVG/HomeSVG";
import ProfileSVG from "../components/SVG/ProfileSVG";
import MessageSVG from "../components/SVG/MessageSVG";
import SearchSVG from "../components/SVG/SearchSVG";
import BellSVG from "../components/SVG/BellSVG";
import BookmarkSVG from "../components/SVG/BookmarkSVG";

interface Router {
  to: string;
  name: string;
  title: string;
  component: FC;
  icon: FC;
  order: number;
  show: boolean;
}

export const router: Router[] = [
  {
    to: "/",
    name: "home",
    title: "Главная",
    component: Home,
    icon: HomeSVG,
    order: 2,
    show: true,
  },
  {
    to: "/home",
    name: "home",
    title: "Главная",
    component: Home,
    icon: HomeSVG,
    order: 2,
    show: false,
  },
  {
    to: "/profile",
    name: "profile",
    title: "Профиль",
    component: Profile,
    icon: ProfileSVG,
    order: 1,
    show: true,
  },
  {
    to: "/messenger",
    name: "messenger",
    title: "Мессенджер",
    component: Messenger,
    icon: MessageSVG,
    order: 3,
    show: true,
  },
  {
    to: "/search",
    name: "search",
    title: "Поиск",
    component: Search,
    icon: SearchSVG,
    order: 4,
    show: true,
  },
  {
    to: "/notifications",
    name: "notifications",
    title: "Уведомления",
    component: Notifications,
    icon: BellSVG,
    order: 5,
    show: true,
  },
  {
    to: "/saved-posts",
    name: "saved-posts",
    title: "Сохранённые посты",
    component: SavedPosts,
    icon: BookmarkSVG,
    order: 6,
    show: true,
  },
];

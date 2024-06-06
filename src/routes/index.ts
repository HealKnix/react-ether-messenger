import { FC } from 'react';

import BellSVG from '@/components/SVG/BellSVG';
import BookmarkSVG from '@/components/SVG/BookmarkSVG';
import FriendsSVG from '@/components/SVG/FriendsSVG';
import HomeSVG from '@/components/SVG/HomeSVG';
import MessageSVG from '@/components/SVG/MessageSVG';
import ProfileSVG from '@/components/SVG/ProfileSVG';
import SearchSVG from '@/components/SVG/SearchSVG';
import Friends from '@/pages/Friends/Friends';
import Home from '@/pages/Home/Home';
import Messages from '@/pages/Messages/Messages';
import Notifications from '@/pages/Notifications/Notifications';
import Profile from '@/pages/Profile/Profile';
import SavedPosts from '@/pages/SavedPosts/SavedPosts';
import Search from '@/pages/Search/Search';

interface Router {
  path: string;
  name: string;
  title?: string;
  component: FC;
  icon?: FC;
  order?: number;
  show?: boolean;
}

export const router: Router[] = [
  {
    path: '/home',
    name: 'home',
    title: 'Главная',
    component: Home,
    icon: HomeSVG,
    order: 2,
    show: true,
  },
  {
    path: '/profile',
    name: 'profile',
    title: 'Профиль',
    component: Profile,
    icon: ProfileSVG,
    order: 1,
    show: true,
  },
  {
    path: '/friends',
    name: 'friends',
    title: 'Друзья',
    component: Friends,
    icon: FriendsSVG,
    order: 4,
    show: true,
  },
  {
    path: '/messages',
    name: 'messages',
    title: 'Сообщения',
    component: Messages,
    icon: MessageSVG,
    order: 3,
    show: true,
  },
  {
    path: '/search',
    name: 'search',
    title: 'Поиск',
    component: Search,
    icon: SearchSVG,
    order: 5,
    show: true,
  },
  {
    path: '/notifications',
    name: 'notifications',
    title: 'Уведомления',
    component: Notifications,
    icon: BellSVG,
    order: 6,
    show: true,
  },
  {
    path: '/saved-posts',
    name: 'saved-posts',
    title: 'Сохранённые посты',
    component: SavedPosts,
    icon: BookmarkSVG,
    order: 7,
    show: true,
  },
];

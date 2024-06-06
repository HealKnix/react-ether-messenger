import './App.scss';

import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import MobileSidebarMenu from '@/components/SidebarMenu/MobileSidebarMenu/MobileSidebarMenu';
import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import RequireAuth from '@/hoc/RequireAuth';
import { useInitializeAuth } from '@/hooks/useInitializeAuth';
import { useResolution } from '@/hooks/useResolution';
import LogIn from '@/pages/LogIn/LogIn';
import SignUp from '@/pages/SignUp/SignUp';

import Friends from '../Friends/Friends';
import Home from '../Home/Home';
import MessageContent from '../Messages/MessageContent/MessageContent';
import Messages from '../Messages/Messages';
import Notifications from '../Notifications/Notifications';
import Profile from '../Profile/Profile';
import SavedPosts from '../SavedPosts/SavedPosts';
import Search from '../Search/Search';

const App: FC = () => {
  const { isAuthenticated, loading } = useInitializeAuth();
  const { isMobile, isDesktop } = useResolution();

  if (loading) {
    return <div>Loading...</div>;
  }

  const authenticatedRoutes = (
    <RequireAuth>
      <>
        {isDesktop && <SidebarMenu />}
        {isMobile && <MobileSidebarMenu />}
        <Routes>
          <Route path="*" element={<span>404</span>} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/messages" element={<Messages />}>
            <Route path="conv/:id" element={<MessageContent />} />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/saved-posts" element={<SavedPosts />} />
        </Routes>
      </>
    </RequireAuth>
  );

  const unauthenticatedRoutes = (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route index path="/" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );

  return <>{isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes}</>;
};

export default App;

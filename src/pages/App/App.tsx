import { FC, useEffect, useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SidebarMenu from '@/components/SidebarMenu/SidebarMenu';
import MobileSidebarMenu from '@/components/SidebarMenu/MobileSidebarMenu/MobileSidebarMenu';
import LogIn from '@/pages/LogIn/LogIn';
import SignUp from '@/pages/SignUp/SignUp';

import { useInitializeAuth } from '@/hooks/useInitializeAuth';
import { router } from '@/routes';

import { useResolution } from '@/hooks/useResolution';

import './App.scss';

const App: FC = () => {
  const { isAuthenticated, loading } = useInitializeAuth();
  const { isMobile, isDesktop } = useResolution();

  useEffect(() => {
    console.log(isMobile);
    console.log(isDesktop);
    console.log('========');
  }, [isMobile, isDesktop]);

  const authenticatedRoutes = useMemo(
    () => (
      <>
        {isDesktop && <SidebarMenu />}
        {isMobile && <MobileSidebarMenu />}
        <Routes>
          <Route path="*" element={<span>404</span>} />
          <Route index path="/" element={<Navigate to="/home" replace />} />
          {router.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}
        </Routes>
      </>
    ),
    [router, isMobile, isDesktop],
  );

  const unauthenticatedRoutes = (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route index path="/" element={<LogIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes}</>;
};

export default App;

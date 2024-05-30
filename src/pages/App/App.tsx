import { FC, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';

import { router } from '../../routes';
import { useAuthStore } from '../../store/useAuthStore';

import './App.scss';

const App: FC = () => {
  const authStore = useAuthStore();

  useEffect(() => {
    if (localStorage.getItem('user'))
      authStore.setUser(JSON.parse(localStorage.getItem('user') ?? ''));
    else authStore.setUser(null);
  }, []);

  return (
    <>
      {!authStore.isAuth() && (
        <>
          <Routes>
            <Route
              path="*"
              element={
                <>
                  <Navigate to="/" replace />
                  <LogIn />
                </>
              }
            />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </>
      )}
      {authStore.isAuth() && (
        <>
          <SidebarMenu />
          <Routes>
            <Route path="*" element={<span>404</span>} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            {router.map((route) => (
              <Route
                path={route.path}
                element={<route.component />}
                key={route.path}
              />
            ))}
          </Routes>
        </>
      )}
    </>
  );
};

export default App;

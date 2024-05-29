import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';
import { router } from '../../routes';
import './App.scss';

const App: FC = () => {
  return (
    <>
      <SidebarMenu />
      <Routes>
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
  );
};

export default App;

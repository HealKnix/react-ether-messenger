import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthStore } from '@/store/useAuthStore';

interface RequireAuthProps {
  children: string | JSX.Element | JSX.Element[];
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const authStore = useAuthStore();

  if (!authStore.isAuth()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;

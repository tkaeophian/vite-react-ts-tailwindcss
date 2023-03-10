import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

import Landing from '@/pages/Landing/Landing';

export const AppRoutes = () => {
  const loggedIn = false;

  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const routes = loggedIn ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};

import { useRoutes } from 'react-router-dom';
import Landing from '@/pages/Landing/Landing';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const loggedIn = false;

  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const routes = loggedIn ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};

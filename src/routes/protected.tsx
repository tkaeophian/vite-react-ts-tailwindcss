import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Spinner } from '../components/Elements';

const App = () => (
  <Suspense
    fallback={
      <div className="h-full w-full flex items-center justify-center">
        <Spinner size="xl" />
      </div>
    }
  >
    <Outlet />
  </Suspense>
);

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [{ path: '*', element: <Navigate to="." /> }],
  },
];

import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const location = useLocation();

  if (localStorage.getItem('token')) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" state={{ from: location }} />
  }
}

export default PrivateRoute;
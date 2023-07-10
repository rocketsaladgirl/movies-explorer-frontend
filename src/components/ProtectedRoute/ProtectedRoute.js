import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';

const ProtectedRoute = ({ element: Component, ...props }) => {
  const { loggedIn } = useContext(CurrentUserContext);

  return (
    loggedIn ? <Component {...props} /> : <Navigate to="/" replace />
)};

export default ProtectedRoute;
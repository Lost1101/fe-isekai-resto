import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProtectedRoute ({ children, auth, allowedRoles }) {
  const role = useSelector((state) => state.auth.role)

  if (!auth) {
    return <Navigate to="/login" />;
  }else if (auth && !allowedRoles.includes(role)){
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
    auth: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
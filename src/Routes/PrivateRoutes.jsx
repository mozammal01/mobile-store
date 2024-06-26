import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from 'prop-types'

const PrivateRoutes = ({ children }) => {

  const { user, loading } = useContext(AuthContext)

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (user) {
    return children;
  }


  return (
    <Navigate to='/login' state="/myCart">

    </Navigate>
  );
};

PrivateRoutes.propTypes = {
  children: PropTypes.node
};

export default PrivateRoutes;
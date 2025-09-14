import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const withAuth = (Component) => {
  return (props) => {
    const { isLoggedIn } = useContext(AuthContext);
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return <Component {...props} />;
  };
};

export default withAuth;

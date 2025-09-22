import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  const username = localStorage.getItem("username");

  if (!username) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Auth;

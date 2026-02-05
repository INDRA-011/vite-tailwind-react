import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/context/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Not logged in → redirect to login page
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

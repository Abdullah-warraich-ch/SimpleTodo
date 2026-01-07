import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

/**
 * ProtectedRoute wraps around any component that requires authentication.
 * If user is not logged in, it redirects to "/login"
 */
export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

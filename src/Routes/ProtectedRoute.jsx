import { Navigate } from "react-router-dom";
import LoginContext from "../Context/LoginContext";
import { useContext } from "react";

export default function ProtectedRoute({ children }) {
  const { loginStatus } = useContext(LoginContext);

  if (!loginStatus) {
    return <Navigate to="/profile" replace />;
  }

  return children;
}

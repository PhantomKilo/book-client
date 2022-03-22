import { Navigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

const PrivateRoute = ({ children: Children }) => {
  const { currentUser } = useAuth();

  return currentUser ? Children : <Navigate to="/login" />;
};

export default PrivateRoute;

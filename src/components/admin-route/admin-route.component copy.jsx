import { Navigate } from "react-router-dom";
const AdminRoute = ({ children }) => {
  // Check for JWT on Local storage or Session Storage;
  const userid = !!localStorage.getItem("userid");
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AdminRoute;

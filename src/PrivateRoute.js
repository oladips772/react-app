/** @format */
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const userInfo = localStorage.getItem("userInfo");

  if (userInfo) {
    return children;
  } else {
    return <Navigate to={"/login"} replace />;
  }
}

export default PrivateRoute;

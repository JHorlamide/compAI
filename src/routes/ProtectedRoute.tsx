import { useLocation, Navigate, Outlet } from "react-router-dom";
import {
  AUTH_PREFIX_PATH,
  UNAUTHENTICATED_ENTRY,
  REDIRECT_URL_KEY,
} from "../config/AppConfig";

const ProtectedRoute = () => {
  const token = true;
  const location = useLocation();

  if (!token) {
    return (
      <Navigate
        to={`${AUTH_PREFIX_PATH}${UNAUTHENTICATED_ENTRY}?${REDIRECT_URL_KEY}=${location.pathname}`}
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;

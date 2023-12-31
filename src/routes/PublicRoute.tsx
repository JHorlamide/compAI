import { Navigate, Outlet } from "react-router-dom";
import { AUTHENTICATED_ENTRY } from "../config/AppConfig";

const PublicRoute = () => {
  const token = true;
  return token ? <Navigate to={AUTHENTICATED_ENTRY} /> : <Outlet />;
};

export default PublicRoute;

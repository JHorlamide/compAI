/* Libraries */
import { Routes, Route, Navigate } from "react-router-dom";

/* Application Modules */
import AppRoute from "./AppRoute";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { AUTHENTICATED_ENTRY } from "../config/AppConfig";
import { publicRoute, protectedRoute } from "../config/RouteConfig";


const AppRouter = () => {
  return (
    <Routes>
      {/* Protected Routes */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate replace to={AUTHENTICATED_ENTRY} />} />

        {protectedRoute.map((route, index) => (
          <Route
            key={route.key + index}
            path={route.path}
            element={
              <AppRoute
                routeKey={route.key}
                component={route.component}
              />
            }
          />
        ))}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      {/* Public Routes */}
      <Route path="/" element={<PublicRoute />}>
        {publicRoute.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <AppRoute
                routeKey={route.key}
                component={route.component}
              />
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;

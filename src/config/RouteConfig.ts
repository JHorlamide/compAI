import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from "./AppConfig";

/* Public Components */
import Dashboard from "../views/app/Dashboard";


interface IRoute {
  [x: string]: any;
  key: string;
  path: string;
  component: () => JSX.Element
}

export const publicRoute: IRoute[] = [
  {
    key: "login",
    path: `${AUTH_PREFIX_PATH}/login`,
    component: Dashboard
  },
]

export const protectedRoute: IRoute[] = [
  /* Dashboard */
  {
    key: "dashboard",
    path: `${APP_PREFIX_PATH}/dashboard`,
    component: Dashboard
  },

  /* Frameworks */
  {
    key: "frameworks",
    path: `${APP_PREFIX_PATH}/frameworks`,
    component: Dashboard
  },

  /* Assessment */
  {
    key: "assessment",
    path: `${APP_PREFIX_PATH}/assessment`,
    component: Dashboard
  },

  /* Implementation */
  {
    key: "implementation",
    path: `${APP_PREFIX_PATH}/implementation`,
    component: Dashboard
  },

  /* Risk Management */
  {
    key: "risk-management",
    path: `${APP_PREFIX_PATH}/risk-management`,
    component: Dashboard
  },

  /* Benchmarking */
  {
    key: "benchmarking",
    path: `${APP_PREFIX_PATH}/benchmarking`,
    component: Dashboard
  },

  /* User Management */
  {
    key: "user-management",
    path: `${APP_PREFIX_PATH}/user-management`,
    component: Dashboard
  },
]
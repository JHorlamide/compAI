/* React */
import React, { Suspense } from "react";
import AppLoader from "../components/util-components/AppLoader/AppLoader";

/* Components / Application Modules */
import View from "../views"

const AppLayout = React.lazy(() => import("./AppLayout"));
const AuthLayout = React.lazy(() => import("./AuthLayout"));

const Layout = () => {
  const token = true;
  const Layout = token ? AppLayout : AuthLayout;

  return (
    <Suspense fallback={<AppLoader />}>
      <Layout>
        <View />
      </Layout>
    </Suspense>
  )
}

export default Layout
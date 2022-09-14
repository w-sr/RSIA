import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import NotFound from "../pages/not-found";
import Product from "../pages/product";

const routes = [
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
  },
];

export const renderRoutes = () => {
  return (
    <Suspense fallback={<>loading....</>}>
      <Routes>
        {routes.map((route, i: number) => {
          return <Route key={i} path={route.path} element={route.element} />;
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default routes;

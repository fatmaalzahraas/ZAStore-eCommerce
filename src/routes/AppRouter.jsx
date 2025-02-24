import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Error from "../pages/Error";
import { lazy } from "react";
import PageSuspenseFallback from "../components/feedback/PageSuspenseFallback/PageSuspenseFallback";
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop/Shop"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Checkout = lazy(() => import("../pages/Checkout/Checkout"));
const Login = lazy(() => import("../pages/Login-Register/Login"));
const Register = lazy(() => import("../pages/Login-Register/Register"));
const ProductDetails = lazy(() =>
  import("../pages/ProductDetails/ProductDetails")
);
const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <Home />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "home",
          element: (
            <PageSuspenseFallback>
              <Home />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "shop",
          element: (
            <PageSuspenseFallback>
              <Shop />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "shop/:id",
          element: (
            <PageSuspenseFallback>
              <ProductDetails />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "cart",
          element: (
            <PageSuspenseFallback>
              <Cart />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "checkOut",
          element: (
            <PageSuspenseFallback>
              <Checkout />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "login",
          element: (
            <PageSuspenseFallback>
              <Login />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "register",
          element: (
            <PageSuspenseFallback>
              <Register />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;

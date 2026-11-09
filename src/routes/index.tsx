import { createBrowserRouter } from "react-router";
import Carts from "../pages/Carts";
import Product from "../pages/Product";
import Users from "../pages/Users";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
         index: true,
         element: <Home />,
      },
      {
         path: "/products",
         element: <Product />,
      },
      {
         path: "/carts",
         element: <Carts />,
      },
      {
         path: "/users",
         element: <Users />,
      },
    ],
  },
]);

export default myRouter;
import { useRoutes } from "react-router-dom";

import { Layout } from "app/layout/Layout";
import { Fallback } from "shared/ui/fallback/Fallback";
import { HomePage } from "pages/homePage/ui/HomePage";
import CartRouter from "features/cart/route";
import WishlistRouter from "features/wishlist/route";
import GetRouterId from "features/getId/route";
import GetRouter from "features/get/route";
import PostRouter from "features/post/route";

export const MyRoutes = () => {
  const myRouter = useRoutes([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Fallback />,
      children: [
        { path: "/", element: <HomePage /> },
        GetRouter,
        GetRouterId,
        CartRouter,
        WishlistRouter,
        PostRouter,
      ],
    },
  ]);
  return myRouter;
};

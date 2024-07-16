import { useRoutes } from "react-router-dom";

import PostRouter from "features/post/route";
import PostRouterId from "features/postId/route";
import CartRouter from "features/cart/route";
import { Layout } from "app/layout/Layout";
import { Fallback } from "shared/ui/fallback/Fallback";
import { HomePage } from "pages/homePage/ui/HomePage";
import WishlistRouter from "features/wishlist/route";
import commentsRoute from "features/comments/route";

export const MyRoutes = () => {
  const myRouter = useRoutes([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Fallback />,
      children: [
        { path: "/", element: <HomePage /> },
        PostRouter,
        PostRouterId,
        CartRouter,
        WishlistRouter,
      ],
    },
  ]);
  return myRouter;
};

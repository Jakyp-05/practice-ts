import { Outlet } from "react-router-dom";
import WishlistPage from "./ui/pages/WishlistPage";

const WishlistRouter = {
  path: "wishlist",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <WishlistPage />,
    },
  ],
};

export default WishlistRouter
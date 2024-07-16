import { Outlet } from "react-router-dom";
import CartPage from "./ui/pages/CartPage";

const CartRouter = {
  path: "cart",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <CartPage />,
    },
  ],
};

export default CartRouter;

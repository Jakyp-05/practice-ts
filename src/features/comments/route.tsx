import { Outlet } from "react-router-dom";
import CommentsPage from "./ui/CommentsPage";

const commentsRoute = {
  path: "/comments",
  element: <Outlet />,
  children: [
    {
      path: "",
      element: <CommentsPage />,
    },
  ],
};

export default commentsRoute;

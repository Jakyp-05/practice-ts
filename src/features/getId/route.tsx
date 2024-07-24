import { Outlet } from "react-router-dom";
import PostPageId from "./ui/pages/get_page_id/GetPgaeId";
import CommentsPage from "features/comments/ui/CommentsPage";

const GetRouterId = {
  path: "posts",
  element: <Outlet />,
  children: [
    {
      path: ":id",
      element: <PostPageId />,
    },
    {
      path: ":id/comments",
      element: <CommentsPage />,
    },
  ],
};

export default GetRouterId;

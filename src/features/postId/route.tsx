import { Outlet } from "react-router-dom";
import PostPageId from "./ui/pages/Post_page_id/PostPageId";
import CommentsPage from "features/comments/ui/CommentsPage";

const PostRouterId = {
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

export default PostRouterId;

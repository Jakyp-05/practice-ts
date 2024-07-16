import { Outlet } from "react-router-dom";
import PostPage from "./ui/pages/post_page/PostPage";

const PostRouter = {
  path: "posts",
  element: <PostPage />,
  // children: [
  //   {
  //     path: "",
  //     element: <h4>post page </h4>,
  //     // element: <PostPage />,
  //   },
  // ],
};
export default PostRouter;

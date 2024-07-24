import { Outlet } from "react-router-dom";
import PostPage from "./ui/pages/get_page/GetPage";

const GetRouter = {
  path: "posts",
  element: <PostPage />,
};
export default GetRouter;

import React, { useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "app/store";
import { Container, PostText, PostContent, CardPost } from "../styles/style";
import { fetchPostAsync } from "../../../store/action";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import Pagination from "shared/ui/pagination/Pagination";

const GetPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { posts, error, status } = useAppSelector(
    (state: RootState) => state.get
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 15;

  useEffect(() => {
    dispatch(fetchPostAsync());
  }, [dispatch]);

  if (status === "loading") return <div>Loading...</div>;

  if (error === "failed") return <div>Error: {error}</div>;

  const handleClick = (id: number) => {
    navigate(`/posts/${id}`);
  };

  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container>
      <PostText>Post</PostText>
      <PostContent>
        <CardPost>
          {currentPosts.map((el) => (
            <div
              key={el.id}
              className="cart-post"
              onClick={() => handleClick(el.id)}
            >
              <h2>{el.title}</h2>
            </div>
          ))}
        </CardPost>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </PostContent>
    </Container>
  );
};

export default GetPage;

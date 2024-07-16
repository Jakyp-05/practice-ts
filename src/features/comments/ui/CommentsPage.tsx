import { RootState, useAppDispatch, useAppSelector } from "app/store";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchIdComments } from "../store/action";
import {
  CommentsBlock,
  CommentsContent,
  Content,
  Email,
  Name,
  PostButton,
} from "../style/styles";

const CommentsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { comments, error, status } = useAppSelector(
    (state: RootState) => state.comments
  );

  // console.log(comments.map((el) => el.name));

  useEffect(() => {
    if (id) {
      dispatch(fetchIdComments(Number(id)));
    }
  }, [dispatch, id]);

  const handleNavigate = () => {
    navigate("/posts");
  };

  return (
    <CommentsContent>
      {/* Comments page ID: ${id} */}
      {comments.length === 0 ? (
        <p>No</p>
      ) : (
        <>
          {comments.map((el) => (
            <CommentsBlock>
              <Name>{el.name}</Name>
              <Email>{el.email}</Email>
              <Content>{el.body}</Content>
              <PostButton onClick={handleNavigate}>В галвную</PostButton>
            </CommentsBlock>
          ))}
        </>
      )}
    </CommentsContent>
  );
};

export default CommentsPage;

import React, { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "app/store";
import { useParams } from "react-router-dom";
import { fetchPostAsyncId } from "../../../store/actions";
import {
  Container,
  PostTitle,
  PostIdContent,
  ButtonNavigate,
  ButtonCart,
  ButtonWish,
  ButtonComments,
} from "../styles/style";
import { useActions } from "../hooks/useActions";

const PostPageId: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    post: selectedPost,
    status: selectedPostStatus,
    error: selectedPostError,
  } = useAppSelector((state: RootState) => state.postId);
  const dispatch = useAppDispatch();

  const {
    isInCart,
    isInWish,
    handleAddToCart,
    handleNavigate,
    handleAddWishlist,
    handleComments,
  } = useActions();

  useEffect(() => {
    if (id) {
      dispatch(fetchPostAsyncId(Number(id)));
    }
  }, [dispatch, id]);

  if (selectedPostStatus === "loading")
    return <div>Loading post details...</div>;
  if (selectedPostError) return <div>Error: {selectedPostError}</div>;

  return (
    <Container>
      <PostTitle>Post Id</PostTitle>
      {selectedPost ? (
        <PostIdContent>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
          <ButtonNavigate onClick={handleNavigate}>Назад</ButtonNavigate>
          <ButtonCart onClick={handleAddToCart}>
            {isInCart ? "Уже в корзине" : "В корзину"}
          </ButtonCart>
          <ButtonWish onClick={handleAddWishlist}>
            {isInWish ? "Уже в избранные" : "В избранную"}
          </ButtonWish>
          <ButtonComments
            onClick={() => handleComments(Number(selectedPost.id))}
          >
            В комментарии
          </ButtonComments>
        </PostIdContent>
      ) : (
        <div>No post selected</div>
      )}
    </Container>
  );
};

export default PostPageId;

// () =>

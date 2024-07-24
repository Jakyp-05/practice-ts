import { RootState, useAppDispatch, useAppSelector } from "app/store";
import { addToCart } from "features/cart/store/slice";
import { fetchIdComments } from "features/comments/store/action";
import { addWishList } from "features/wishlist/store/slice";
import { useNavigate } from "react-router-dom";

export const useActions = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { post: selectedPost } = useAppSelector(
    (state: RootState) => state.getId
  );
  const cartItems = useAppSelector((state: RootState) => state.cart.cart);
  const wishItems = useAppSelector(
    (state: RootState) => state.wishlist.wishlist
  );

  const isInCart = selectedPost
    ? cartItems.some((el) => el.id === selectedPost.id)
    : false;

  const isInWish = selectedPost
    ? wishItems.some((el) => el.id === selectedPost.id)
    : false;

  const handleAddToCart = () => {
    if (selectedPost) {
      dispatch(addToCart(selectedPost));
      alert("Ваш товар в корзине!!! :)");
    }
  };

  const handleAddWishlist = () => {
    if (selectedPost) {
      dispatch(addWishList(selectedPost));
      alert("ваш товар в избранные");
    }
  };

  const handleNavigate = () => {
    navigate("/posts");
  };

  const handleComments = (id: number) => {
    navigate(`/posts/${id}/comments`);
  };

  return {
    isInCart,
    isInWish,
    handleAddToCart,
    handleNavigate,
    handleAddWishlist,
    handleComments,
  };
};

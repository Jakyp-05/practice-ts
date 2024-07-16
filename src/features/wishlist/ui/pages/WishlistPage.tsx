import { RootState, useAppDispatch, useAppSelector } from "app/store";
import React from "react";
import { ContainerWishlist, WishItems, RemoveWish } from "../styles/style";
import { removeWishList } from "features/wishlist/store/slice";

const WishlistPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const wishItems = useAppSelector(
    (state: RootState) => state.wishlist.wishlist
  );

  const handleRemove = (id: number) => {
    dispatch(removeWishList(id));
  };

  return (
    <ContainerWishlist>
      {wishItems.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        wishItems.map((el) => (
          <WishItems>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
            <RemoveWish onClick={() => handleRemove(el.id)}>Удалить</RemoveWish>
          </WishItems>
        ))
      )}
    </ContainerWishlist>
  );
};

export default WishlistPage;

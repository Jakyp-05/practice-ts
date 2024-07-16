import React from "react";
import {
  CartButtons,
  CartItems,
  ContainerCart,
  RemoveCart,
} from "../styles/style";
import { RootState, useAppDispatch, useAppSelector } from "app/store";
import { removeCart } from "features/cart/store/slice";

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.cart);

  const handleRemove = (id: number) => {
    dispatch(removeCart(id));
  };


  return (
    <ContainerCart>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((el) => (
          <CartItems>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
            <CartButtons>
              <RemoveCart onClick={() => handleRemove(el.id)}>
                Удалить
              </RemoveCart>
            </CartButtons>
          </CartItems>
        ))
      )}
    </ContainerCart>
  );
};

export default CartPage;

import React from 'react';

import Typography from '@material-ui/core/Typography';
import CartIcon from "@material-ui/icons/ShoppingCart";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";

import { Product } from "../../models/Product";
import {
  addToCart,
  selectCartItems,
  removeFromCart,
} from "../../store/cartSlice";
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/hooks';

type AddProductToCartProps = {
  product: Product
};

export default function AddProductToCart({product}: AddProductToCartProps) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const cartItem = cartItems.find(i => i.product.id === product.id);

  return (
    <>
    {
      cartItem ?
        (
          <>
            <IconButton onClick={() => dispatch(removeFromCart(product))}>
              <Remove color={"secondary"}/>
            </IconButton>
            <Typography align="center">
              {cartItem.count}
            </Typography>
            <IconButton onClick={() => dispatch(addToCart(product))}>
              <Add color={"secondary"}/>
            </IconButton>
            </>
        )
        :
        (
          <IconButton onClick={() => dispatch(addToCart(product))}>
            <CartIcon color={"secondary"}/>
          </IconButton>
        )
    }
    </>
  );
}

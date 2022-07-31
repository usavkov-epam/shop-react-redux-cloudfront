import axios from 'axios';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import Badge from "@material-ui/core/Badge";
import CartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

import { API_PATHS } from "../../../../constants";
import { selectCartItems, updateFromApi } from "../../../../store/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(
        `${API_PATHS.cart}/profile/cart`,
        {
          headers: {
            Authorization: `Basic ${localStorage.getItem('authorization_token')}`
          }
        }
    )
      .then(({ data: { data: { cart } } }) => {
        dispatch(updateFromApi(cart))
      })
      .catch(console.log);
  }, [dispatch]);
  const cartItems = useSelector(selectCartItems);
  const badgeContent = cartItems.length || undefined;

  return (
    <IconButton
      aria-label="show 4 new mails"
      color="inherit"
      component={Link}
      to="/cart"
      size="small"
    >
      <Badge badgeContent={badgeContent} color="secondary">
        <CartIcon />
      </Badge>
    </IconButton>
  );
}

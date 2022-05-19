import React from 'react';
import { useSelector } from "react-redux";

import Typography from '@material-ui/core/Typography';

import { CartItems } from "../../../../components";
import { selectCartItems } from "../../../../store/cartSlice";

export function ReviewCart() {
  const cartItems = useSelector(selectCartItems);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <CartItems items={cartItems} isEditable/>
    </React.Fragment>
  );
}

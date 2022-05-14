import React from 'react';
import {FormikValues} from "formik";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { CartItems } from "components";
import { CartItem } from "models/CartItem";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
  },
}));

type ReviewOrderProps = {
  address: FormikValues,
  items: CartItem[]
};

export function ReviewOrder({address, items}:ReviewOrderProps) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <CartItems items={items} isEditable={false}/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{address.firstName} {address.lastName}</Typography>
          <Typography gutterBottom>{address.address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Comment
          </Typography>
          <Typography gutterBottom>{address.comment}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

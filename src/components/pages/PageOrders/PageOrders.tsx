import React from 'react';

import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

import { Orders } from "../../../components/pages";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3, 0, 3),
  },
}));

export default function PageOrders() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Typography variant="h6" gutterBottom>
        Manage orders
      </Typography>
      <Orders/>
    </div>
  );
}

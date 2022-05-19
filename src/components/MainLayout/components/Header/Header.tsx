import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

import { AppIcon } from '../../../Icons/AppIcon';
import { ContentWrapper } from '../../../ContentWrapper';
import { Filler } from '../../../Filler';
import { Cart } from "../Cart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: 44,
      width: '100%',  
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    homeLink: {
      color: 'white',
      textDecoration: 'none'
    }
  }),
);

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const auth = true;

  const handleMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <AppBar
      position="relative"
    >
      <ContentWrapper>
        <Toolbar className={classes.root}>
          <Link className={classes.homeLink} to="/">
            <AppIcon fontSize='small'/>
          </Link>

          <Filler />

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                size="small"
              >
                <AccountCircle/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  component={Link}
                  to="/admin/orders"
                  onClick={handleClose}
                >
                  Manage orders
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/admin/products"
                  onClick={handleClose}
                >
                  Manage products
                </MenuItem>
              </Menu>
            </div>
          )}
          <Cart/>
        </Toolbar>
      </ContentWrapper>
    </AppBar>
  );
}

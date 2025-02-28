import React from 'react';

import Container from "@material-ui/core/Container";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Header } from "./components";
import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.css';

interface MainLayoutProps extends React.PropsWithChildren<{}> {
  
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        My Store
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => {
  console.log(theme);

  return ({
    main: {
      backgroundColor: theme.palette.background.paper,
    },
    container: {
      paddingBottom: theme.spacing(8),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4),
    },
  })
});

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header/>
      <main className={[styles.main, classes.main].join(' ')}>
        <Container className={classes.container} maxWidth="md">
          {children!}
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Thank you for your purchase!
        </Typography>
        <Copyright/>
      </footer>

      <Outlet />
    </>
  );
};

export default MainLayout;

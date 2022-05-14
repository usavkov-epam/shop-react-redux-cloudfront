import React from 'react';

import Container from "@material-ui/core/Container";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Header } from "./components";
import { Outlet } from 'react-router-dom';

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

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header/>
      <main>
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

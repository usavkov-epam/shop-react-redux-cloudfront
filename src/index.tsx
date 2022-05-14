import axios from 'axios';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import App from 'components/App/App';
import { store } from 'store/store';
import * as serviceWorker from './serviceWorker';

import 'index.css';

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "rgba(210, 210, 215, 1)",
      default: "rgba(255, 255, 255, 1)",
    },
    primary: {
      light: "rgba(66, 66, 69, 1)",
      main: "rgba(0, 0, 0, 0.8)",
      dark: "rgba(26, 26, 26, 1)",
      contrastText: "rgba(214, 214, 214, 1)",
    },
    secondary: {
      light: "rgba(0, 110, 219, 1)",
      main: "rgba(0, 113, 227, 1)",
      dark: "rgba(0, 119, 237, 1)",
      contrastText: "#fff"
    },
    error: {
      light: "rgba(255, 242, 244, 1)",
      main: "rgba(237, 90, 90, 1)",
      dark: "rgba(227, 0, 0, 1)",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    }
  }
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    if (error?.response?.status === 400) {
      alert(error.response.data?.data);
    }

    return Promise.reject(error?.response ?? error);
  }
);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline/>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

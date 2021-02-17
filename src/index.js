import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();

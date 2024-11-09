import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Create a theme (optional: you can customize this theme)
const theme = createTheme({
  palette: {
    primary: {
      main: '#2570FF', // You can set your primary color here
    },
    secondary: {
      main: '#2570FF', // You can set your secondary color here
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

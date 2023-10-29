import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  spacing: [2, 4, 8, 16, 32, 64],
  typography: {
    fontFamily: '"Poppins", sans-serif'
  },
  palette: {
    primary: {
      main: '#1C3F53',
      dark: '#0066CC',
    },
    secondary: {
      main: '#FFFFFF'
    },
    tertiary: {
      main: "#FFFFFF"
    },
    warning: {
      main: '#FF6347'
    },
    greys: {
      main: '#666666',
      dark: '#333333'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      mobile: 500,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
console.log({ theme });
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />   
    </ThemeProvider>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

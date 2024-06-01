import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from './assets/theme'; 

import GlobalStyles from '@mui/material/GlobalStyles'; 

const globalStyles = (
  <GlobalStyles
    styles={{
      '@font-face': [
        {
          fontFamily: 'Star Jedi',
          src: 'url(/src/assets/StarJedi.ttf) format("truetype")',
        },
      ],
      body: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#000000', 
      },
      html: {
        margin: 0,
        padding: 0,
      },
    }}
  />
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />     
      {globalStyles}       
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

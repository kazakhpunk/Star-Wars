import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700', 
    },
    background: {
      default: '#000000', 
      paper: '#1c1c1c', 
    },
    text: {
      primary: '#ffffff', 
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', 
    h2: {
      fontFamily: 'Star Jedi, Arial, sans-serif',
      fontWeight: 'bold',
      fontSize: '2.5rem',
    },
    h5: {
      fontFamily: 'Star Jedi, Arial, sans-serif', 
      fontWeight: 'bold',
      fontSize: '1.5rem',
    },
    button: {
      fontFamily: 'Arial, sans-serif', 
      fontWeight: 'bold',
    },
  },
});

export default theme;

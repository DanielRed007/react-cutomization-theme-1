// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2'
    },
    secondary: {
      main: '#FF4081'
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  }
});

export default theme;

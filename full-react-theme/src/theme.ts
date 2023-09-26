// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0161E1'
    },
    secondary: {
      main: '#CC00CC'
    },
    background: {
      default: "#303030"
    },
    success: {
      main: "#C1D62D"
    }
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    fontWeightBold: 700
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;

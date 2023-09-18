// src/theme.js
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    tertiary?: {
      main: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976D2'
    },
    secondary: {
      main: '#FF4081'
    },
    tertiary: {
      main: '#FF4081'
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;

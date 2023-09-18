import React from 'react';
import { useTheme } from '@mui/material/styles';
import { ThemeGrid } from './components/grid/ThemeGrid';

function App() {
  const theme = useTheme();

  return (
    <>
      <ThemeGrid />
    </>
  );
}

export default App;

import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

function App() {
  const theme = useTheme();

  return (
    <div className="App">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper />
        <Paper elevation={3} />
        <div>
          <h1 style={{ color: theme.palette.primary.main }}>Primary Color</h1>
          <p style={{ color: theme.palette.secondary.main }}>Secondary Color</p>
        </div>
      </Box>
    </div>
  );
}

export default App;

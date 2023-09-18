import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { CustomBtn } from '../custom-btn/CustomBtn';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const ThemeGrid = () => {
  return (
    <Container style={{marginTop: '3.5rem'}} maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={4}>
            <Item>
                <CustomBtn />
            </Item>
          </Grid>

          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>

          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>

          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>

          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          
        </Grid>
      </Box>
    </Container>
  )
}
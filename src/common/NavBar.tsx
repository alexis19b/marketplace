import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Container, Grid, Stack, Toolbar, Typography } from '@mui/material';

export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography>Jesus!</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={1}>
                  <Button variant="contained" onClick={() => navigate("login")}>Login</Button>
                  <Button variant="outlined">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
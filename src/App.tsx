import { Button, Container } from '@mui/material';
import React from 'react';
import { NavBar } from './common/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Container sx={{ mt: 9 }} maxWidth="xl">
        <Button variant="contained">Botton</Button>
      </Container>
    </div>
  );
}

export default App;

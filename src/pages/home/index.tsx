import { Button, Container } from '@mui/material'
import React from 'react'
import { useNotification } from '../../context/notification.context'

export const HomePage: React.FC<{}> = () => {
  const { getError } = useNotification();

  const handleClick = () => {
    getError("Enviados desde el context")
  }

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Button onClick={handleClick} variant="contained">Home</Button>
    </Container>
  )
}

import React from 'react'
import { Container } from '@mui/material'
import { HeaderComponent } from '../../components'

export const HomePage: React.FC<{}> = () => {
  return (
    <Container maxWidth="xl">
      <HeaderComponent title="HOla munado" description="description del title" />
    </Container>
  )
}

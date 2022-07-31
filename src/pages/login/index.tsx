import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNotification } from '../../context/notification.context'
import { LoginValidate } from '../../utils/validateForm'

type LoginType = {
  username: string,
  password: string
}

export const LoginPage: React.FC<{}> = () => {
  const { getError, getSuccess } = useNotification();

  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: "",
  })

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    LoginValidate.validate(loginData).then(() => {
      getSuccess(JSON.stringify(loginData));
    }).catch((error) => {
      getError(error.message);
    })

  }

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">Iniciar sesion</Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                type="text"
                name="username"
                onChange={dataLogin}
                label="Email"
                margin="normal"
                sx={{ mt: 2, mb: 1.5 }}
                fullWidth
              />
              <TextField
                type="password"
                name="password"
                onChange={dataLogin}
                label="Password"
                margin="normal"
                sx={{ mt: 1, mb: 1.5 }}
                fullWidth
              />
              <Button variant="contained" fullWidth sx={{ mt: 1.5, mb: 2.5 }} type="submit">Iniciar Sesion</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

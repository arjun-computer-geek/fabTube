import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container
} from 'components/muiComponents'
import { LockOutlinedIcon } from "assets/muiIcons";
import { useUser } from 'contexts/userContext';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://fabtube.netlify.app/">
        FabTube
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export const Login = () => {

  const [isChecked, setIsChecked] = useState(false)
  const navigate = useNavigate()
  const { login, userState: { isAuthenticated, error }, clearError } = useUser()

  useEffect(() => {

    if (isAuthenticated) {
      navigate('/')
    }

    if (error) {
      toast.error(error)
      clearError()
    }

  }, [isAuthenticated, error])

  const validateData = (data) => {
    if (data.password !== "" && data.email !== "") {
      return true
    }
    else {
      return false
    }
  }
  const remembermeHandler = (e) => {
    setIsChecked(e.target.checked)
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get('email'),
      password: data.get('password')
    }
    if (validateData(userData)) {
      login(userData, isChecked);
    }
    else {
      toast.error("Field can't be empty")
    }
  };
  const tesingLoginHandler = (event) => {
    event.preventDefault();
    login({
      email: "admina@gmail.com",
      password: "password"
    }, true);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" checked={isChecked} onClick={remembermeHandler} />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={tesingLoginHandler}
            >
              Login for testing.
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

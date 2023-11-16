import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import axios from 'axios';


const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#eeeeee'
    }
  }
});

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
  event.preventDefault();

  const requestBody = {
    email: email,  // Use the email state
    password: password  // Use the password state
  };

  const url = 'http://ec2-3-16-1-211.us-east-2.compute.amazonaws.com/api/customerLogin';

  try {
    const response = await axios.post(url, requestBody);
    console.log('Response:', response.data);

    if (response.data.status === 'LOGIN_SUCCEEDED') {
      setMessage('Login successful');
      setIsSuccess(true);
    } else {
      // Handle other statuses or unexpected responses
      setMessage('Login failed');
      setIsSuccess(false);
    }
  } 
  catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      setMessage(error.response.data.message);
    } else if (error.request) {
      // The request was made but no response was received
      setMessage("Network error: Please check your internet connection.");
    } else {
      // Something happened in setting up the request that triggered an Error
      setMessage("Error: " + error.message);
    }
    setIsSuccess(false);
  }
};

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            width: '400px',
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '25px',
            padding: '18px 25px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {message && <Alert severity={isSuccess ? 'success' : 'error'}>{message}</Alert>}
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
<<<<<<< Updated upstream
=======
        <Copyright sx={{ mt: 10 }} />
>>>>>>> Stashed changes
      </Container>
    </ThemeProvider>
  );
}
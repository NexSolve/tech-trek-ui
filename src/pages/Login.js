import React from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Box } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google'; // Google login component
import { useNavigate } from 'react-router-dom'; // Navigation hook
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async (response) => {
    if (response.credential) {
      try {
        const googleToken = response.credential;
        const res = await axios.post('/api/google-login', { token: googleToken });

        if (res.status === 200) {
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Google login error:', error.message);
        alert('Error logging in with Google');
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: '2rem' }}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#272A31', borderRadius: '10px', color: 'white' }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: 2, color: 'white' }}>
              Login
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    InputProps={{
                      style: { color: 'white' },
                    }}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    sx={{
                      '& .MuiInputBase-input::placeholder': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                    type="password"
                    margin="normal"
                    InputProps={{
                      style: { color: 'white' },
                    }}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                    sx={{
                      '& .MuiInputBase-input::placeholder': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>

            <Typography variant="body1" align="center" sx={{ marginTop: 2, color: 'white' }}>
              Or login with
            </Typography>

            {/* Google Login Button */}
            <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => alert('Google login failed')}
                useOneTap
              />
            </Box>

            <Typography variant="body2" align="center" sx={{ marginTop: 2, color: 'white' }}>
              Don't have an account? <Button onClick={() => navigate('/signup')}>Sign Up</Button>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google'; // Google Sign-In component
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import axios from 'axios'; // For making API requests

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post('/api/signup', { email, password, name: formData.name });
      console.log(response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error(error.message);
      alert('Error creating account');
    }
  };

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
    <Container maxWidth="lg" sx={{ paddingTop: '2rem', borderTop: '2px solid #2D3038', color: 'white' }}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#272A31', borderRadius: '10px', color: 'white' }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
              Sign Up
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    required
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
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
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    required
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
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
                  <Button type="submit" fullWidth variant="contained" color="primary">
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </form>

            <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
              Or sign up with
            </Typography>

            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => alert('Google login failed')}
              useOneTap
            />

            <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
              Already have an account? <Button onClick={() => navigate('/login')}>Login</Button>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;

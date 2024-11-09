import React, { useState } from 'react';
import { Container, Grid, Typography, Paper, Box, Button, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '2rem', backgroundColor: '#121212', color: '#ffffff' }}>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#1c1c1c',
            color: '#ffffff',
            width: '240px',
            paddingTop: '2rem',
          },
        }}
      >
        <List>
          <ListItem button onClick={() => navigate('/profile')}>
            <ListItemText primary="Profile" />
          </ListItem>
          {/* Repeat for other navigation items */}
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      <IconButton
        sx={{ display: { sm: 'none', md: 'none' }, color: '#0D99FF' }}
        onClick={() => toggleDrawer(true)}
        edge="start"
        aria-label="menu"
      >
        <Menu />
      </IconButton>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#1c1c1c', color: '#ffffff' }}>
            <Typography variant="h5" sx={{ color: '#0D99FF', marginBottom: 2 }}>
              Dashboard Menu
            </Typography>
            <Button fullWidth variant="contained" sx={{ backgroundColor: '#0D99FF', color: '#ffffff', marginBottom: 1 }} onClick={() => navigate('/profile')}>
              Profile
            </Button>
            {/* Repeat for other buttons */}
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#1c1c1c', color: '#ffffff' }}>
            <Typography variant="h4" sx={{ color: '#0D99FF', marginBottom: 2 }}>
              Welcome to Your Dashboard
            </Typography>

            <Box sx={{ marginBottom: 4 }}>
              <Typography variant="h6" sx={{ color: '#0D99FF' }}>Your Progress</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Paper elevation={2} sx={{ padding: 2, backgroundColor: '#2d2d2d', color: '#ffffff' }}>
                    <Typography variant="h6" sx={{ color: '#0D99FF' }}>Courses</Typography>
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                      Track your learning progress in courses
                    </Typography>
                    <Button variant="outlined" sx={{ borderColor: '#0D99FF', color: '#0D99FF', marginTop: 2 }} fullWidth>
                      View Courses
                    </Button>
                  </Paper>
                </Grid>
                {/* Repeat for other progress items */}
              </Grid>
            </Box>

            <Box sx={{ marginBottom: 4 }}>
              <Typography variant="h6" sx={{ color: '#0D99FF' }}>Recent Activity</Typography>
              <Paper elevation={2} sx={{ padding: 2, marginTop: 2, backgroundColor: '#2d2d2d', color: '#ffffff' }}>
                <Typography variant="body1">
                  Here you can see your recent progress in coding challenges, courses, or mock interviews.
                </Typography>
              </Paper>
            </Box>

            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h6" sx={{ color: '#0D99FF' }}>Quick Actions</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Button variant="contained" fullWidth sx={{ backgroundColor: '#0D99FF', color: '#ffffff' }}>
                    Continue Learning
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button variant="contained" fullWidth sx={{ backgroundColor: '#0D99FF', color: '#ffffff' }}>
                    Take a Mock Interview
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

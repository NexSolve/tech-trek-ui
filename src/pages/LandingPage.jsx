import React from 'react';
import { Button, Typography, Grid, Container, Card, CardContent } from '@mui/material';
import { PersonOutline, School, Code, Build, Assignment } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation

const TechTrekLandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header Section */}
      <header>
        <Container maxWidth="full" sx={{ paddingTop: '80px', paddingBottom: '80px', textAlign: 'center'}}>
          <Typography variant="h2" component="h1" sx={{ color: 'white', fontWeight: 700, fontSize: '3rem' }}>
            TechTrek
          </Typography>
          <Typography variant="h5" sx={{ color: 'white', marginTop: '10px', marginBottom: '30px',fontStyle: 'italic' }}>
            Master technology and unlock your path to a successful career in the IT industry.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              backgroundColor: '#2570FF',
              '&:hover': { backgroundColor: '#135CE5' },
              padding: '10px 30px',
              borderRadius: '30px',
            }}
            onClick={() => navigate('/signup')}
          >
            Start Your Journey
          </Button>
        </Container>
      </header>

      {/* Features Section */}
      <section>
        <Container maxWidth="lg" sx={{ padding: '50px 20px' }}>
          <Typography variant="h4" sx={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '30px', textAlign: 'center', color: '#fff' }}>
            Key Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {/* Feature 1 */}
            <Grid item xs={12} md={4}>
              <Card sx={{ boxShadow: 3, borderRadius: '15px', padding: '20px', backgroundColor: '#272A31' }}>
                <CardContent>
                  <PersonOutline sx={{ fontSize: '3rem', color: '#2570FF', marginBottom: '15px' }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '15px', color: '#fff' }}>Personalized Profile</Typography>
                  <Typography sx={{ color: '#747577' }}>
                    Track your skills, progress, and career goals. Stay organized throughout your preparation journey.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Feature 2 */}
            <Grid item xs={12} md={4}>
              <Card sx={{ boxShadow: 3, borderRadius: '15px', padding: '20px', backgroundColor: '#272A31' }}>
                <CardContent>
                  <School sx={{ fontSize: '3rem', color: '#2570FF', marginBottom: '15px' }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '15px', color: '#fff' }}>Curated Courses</Typography>
                  <Typography sx={{ color: '#747577' }}>
                    Access a library of free and premium courses on Data Structures, Algorithms, Cloud Computing, and more.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Feature 3 */}
            <Grid item xs={12} md={4}>
              <Card sx={{ boxShadow: 3, borderRadius: '15px', padding: '20px', backgroundColor: '#272A31' }}>
                <CardContent>
                  <Code sx={{ fontSize: '3rem', color: '#2570FF', marginBottom: '15px' }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '15px', color: '#fff' }}>Coding Challenges</Typography>
                  <Typography sx={{ color: '#747577' }}>
                    Solve coding problems of varying difficulty levels and track your progress, similar to LeetCode.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section>
        <Container maxWidth="lg" sx={{ padding: '50px 20px', textAlign: 'center', backgroundColor: '#1E2025' }}>
          <Typography variant="h4" sx={{ color: '#fff', fontWeight: 600, fontSize: '2.5rem', marginBottom: '20px' }}>
            Ready to Start Your Journey?
          </Typography>
          <Typography sx={{ color: '#747577', fontSize: '1.2rem', marginBottom: '30px' }}>
            Join TechTrek today and start mastering the skills you need to land your dream job in IT.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              backgroundColor: '#ffffff',
              color: '#2570FF',
              '&:hover': { backgroundColor: '#f1f1f1', color: '#135CE5' },
              padding: '10px 30px',
              borderRadius: '30px',
            }}
            onClick={() => navigate('/signup')}
          >
            Sign Up Now
          </Button>
        </Container>
      </section>

      {/* Footer Section */}
      <footer>
        <Container maxWidth="lg" sx={{ padding: '20px 0', textAlign: 'center', backgroundColor: '#1E2025' ,borderTop: '2px solid #2D3038', color: '#fff'}}>
          {/* <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
            <li style={{ display: 'inline-block', margin: '0 15px' }}>
              <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
            </li>
            <li style={{ display: 'inline-block', margin: '0 15px' }}>
              <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
            </li>
            <li style={{ display: 'inline-block', margin: '0 15px' }}>
              <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a>
            </li>
            <li style={{ display: 'inline-block', margin: '0 15px' }}>
              <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</a>
            </li>
          </ul> */}
          Copyright © 2024 TechTrek
        </Container>
      </footer>
    </div>
  );
};

export default TechTrekLandingPage;

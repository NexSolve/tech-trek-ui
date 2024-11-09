import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import TechTrekLandingPage from './LandingPage';
const Home = () => {
  return (
    <Container textAlign="center" style={{ borderTop: '2px solid #2D3038'}}>
      <TechTrekLandingPage />
    </Container>
  );
};

export default Home;

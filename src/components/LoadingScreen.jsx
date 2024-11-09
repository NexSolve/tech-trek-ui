import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const LoadingScreen = () => {
  const [binaryString, setBinaryString] = useState('0101');

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the binary string with random "0" and "1"
      setBinaryString((prev) =>
        prev
          .split('')
          .map(() => (Math.random() > 0.5 ? '1' : '0'))
          .join('')
      );
    }, 100);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#272A31', color: '#00FF00' }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 'bold',
          letterSpacing: '0.1rem',
        }}
      >
        {binaryString}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'monospace',
          color: '#00FF00',
          marginTop: 2,
          opacity: 0.8,
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingScreen;

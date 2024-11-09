import React, { useState } from 'react';
import { Button, AppBar, Toolbar, Typography, Box, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false); // State to control Drawer visibility
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen is mobile

  // Function to toggle the Drawer
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <AppBar 
      position="static" 
      style={{
        backgroundColor: '#23252B', // Background color
        boxShadow: 'none', // Remove shadow from the navbar
      }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontFamily: 'Doto',color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
          TechTrek
        </Typography>

        {/* Display Desktop Navigation */}
        {!isMobile ? (
          <Box display="flex" alignItems="center">
              <Button color="inherit" component={Link}  style ={{ border:'2px solid white', borderRadius:'10px', color:'black',backgroundColor:'white',margin:'5px'}} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link}  style ={{ border:'2px solid white', borderRadius:'10px', color:'black',backgroundColor:'white',margin:'5px' }} to="/signup">
              Sign Up
            </Button>
          
          </Box>
        ) : (
          // Mobile Menu Button
          <Button color="inherit" onClick={toggleMenu}>
            Menu
          </Button>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={openMenu} onClose={toggleMenu}>
        <List>
        <ListItem button component={Link} to="/" onClick={toggleMenu}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/signup" onClick={toggleMenu}>
            <ListItemText primary="Sign Up" />
          </ListItem>

       
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;

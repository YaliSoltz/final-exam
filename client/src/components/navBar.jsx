import React from 'react';
import {AppBar, IconButton, Box, Typography, Button, Toolbar} from '@mui/material';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome to job finder!
            </Typography>
            <Link to='/login' style={{textDecoration: 'none', color: 'white'}}><Button color="inherit">Login</Button></Link>
            <Link to='/signUp' style={{textDecoration: 'none', color: 'white'}}><Button color="inherit">Sign up</Button></Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default NavBar;

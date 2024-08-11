// src/components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CabinIcon from '@mui/icons-material/Cabin';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <CabinIcon sx={{ mr: 2 }} />
        </Link>
        <Typography variant="h6">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Cabañas en Chile
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

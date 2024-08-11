// src/components/CityButtons.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CabinContext from '../context/CabinContext';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CityButtons = () => {
  const { setSelectedCity } = useContext(CabinContext);
  const navigate = useNavigate();

  const cities = ['Santiago', 'Valparaíso', 'La Serena', 'Pucón'];

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    navigate(`/city/${city}`);
  };

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Selecciona una ciudad
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {cities.map((city) => (
          <Grid item key={city}>
            <Button variant="contained" color="primary" onClick={() => handleCitySelect(city)}>
              {city}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CityButtons;



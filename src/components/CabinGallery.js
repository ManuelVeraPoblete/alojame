import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CabinContext from '../context/CabinContext';
import { motion } from 'framer-motion';

const CabinGallery = () => {
  const { cabins, selectedCity, loading, error, setSelectedCabin } = useContext(CabinContext);

  if (loading) return <Typography>Cargando cabañas...</Typography>;
  if (error) return <Typography>{error}</Typography>;
  if (!selectedCity) return null;


  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Cabañas disponibles en {selectedCity}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {cabins.map((cabin) => (
          <Grid item xs={12} sm={6} md={4} key={cabin.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card onClick={() => setSelectedCabin(cabin)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={require('../assets/images/'+cabin.image)}
                  alt={cabin.name}
                />
                <CardContent>
                  <Typography variant="h6">{cabin.name}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CabinGallery;

// src/components/CabinModal.js
import React, { useContext } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CabinContext from '../context/CabinContext';
import { motion } from 'framer-motion';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const CabinModal = () => {
  const { selectedCabin, setSelectedCabin } = useContext(CabinContext);

  if (!selectedCabin) return null;

  return (
    <Modal
      open={!!selectedCabin}
      onClose={() => setSelectedCabin(null)}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            {selectedCabin.name}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {selectedCabin.description}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {selectedCabin.description}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {selectedCabin.description}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {selectedCabin.description}
          </Typography>
          <Button variant="contained" color="secondary" onClick={() => setSelectedCabin(null)} sx={{ mt: 2 }}>
            Cerrar
          </Button>
        </Box>
      </motion.div>
    </Modal>
  );
};

export default CabinModal;

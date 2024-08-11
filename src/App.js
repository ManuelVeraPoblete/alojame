// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { CabinProvider } from './context/CabinContext';
import Navbar from './components/Navbar';
import CityButtons from './components/CityButtons';
import CabinGallery from './components/CabinGallery';
import CabinModal from './components/CabinModal';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CabinProvider>
        <Router>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<CityButtons />} />
              <Route path="/city/:city" element={<CabinGallery />} />
            </Routes>
          </Container>
          <CabinModal />
        </Router>
      </CabinProvider>
    </ThemeProvider>
  );
}

export default App;


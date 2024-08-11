// src/context/CabinContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CabinContext = createContext();

export const CabinProvider = ({ children }) => {
  const [cabins, setCabins] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCabin, setSelectedCabin] = useState(null); // `setSelectedCabin` es parte del estado
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCabins = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:5000/api/cabins?city=${city}`);
      setCabins(response.data);
    } catch (err) {
      setError('Error al cargar las cabañas.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCity) {
      fetchCabins(selectedCity);
    }
  }, [selectedCity]);

  return (
    <CabinContext.Provider
      value={{
        cabins,
        selectedCity,
        setSelectedCity,
        selectedCabin,  // `selectedCabin` incluido en el contexto
        setSelectedCabin, // `setSelectedCabin` incluido en el contexto
        loading,
        error,
      }}
    >
      {children}
    </CabinContext.Provider>
  );
};

export default CabinContext;
// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#c2185b',
    },
  },
  typography: {
    h6: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
});

export default theme;

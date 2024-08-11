// api/server.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');  // Importar CORS
const cabinRoutes = require('./routes/cabinRoutes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());  // Usar CORS para permitir solicitudes desde otros dominios

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Cabañas',
      version: '1.0.0',
      description: 'API para gestionar y consultar cabañas por ciudad',
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.use('/api', cabinRoutes);

app.listen(port, () => {
  console.log(`API de Cabañas corriendo en http://localhost:${port}`);
});

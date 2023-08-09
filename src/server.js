require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 8000; //// Lee el puerto del archivo .env o utiliza el puerto 8000 por defecto

// Conexión a la base de datos MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
    // Una vez conectado a MongoDB, iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error en la conexión a MongoDB:', err.message);
  });

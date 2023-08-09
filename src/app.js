const express = require("express");
const app = express();
const bookRoutes = require("./routes/bookRoutes");
const externalApiRoutes = require("./routes/externalApiRoutes");
const loggerMiddleware = require("./middleware/loggerMiddleware");

// Este Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Middleware propio para registrar información sobre las solicitudes
app.use(loggerMiddleware);

// Rutas para el CRUD de libros
app.use("/api/books", bookRoutes);

// Ruta para comunicarse con la API externa
app.use("/api/external", externalApiRoutes);

// Ruta de inicio (página principal)
app.get("/", (req, res) => {
  res.send("Bienvenido al Registro de Libros");
});



module.exports = app;

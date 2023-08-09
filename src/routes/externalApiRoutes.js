const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/external-api", async (req, res) => {
  try {
    const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
    const searchTitle = req.query.q; // Obtiene el valor del parámetro "q" de la URL

    const response = await axios.get("https://www.googleapis.com/books/v1/volumes", {
      params: {
        q: searchTitle,
        key: apiKey,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error al obtener los resultados de búsqueda:", error.message);
    res.status(500).json({ error: "Error al obtener los resultados de búsqueda" });
  }
});

module.exports = router;

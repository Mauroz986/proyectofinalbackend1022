const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookControllers");

// Rutas para el CRUD de libros
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.post("/", bookController.addBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

// Ruta para obtener un libro por su ID
router.get("/get-by-id/:id", bookController.getBookById);

module.exports = router;

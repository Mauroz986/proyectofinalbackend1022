const Book = require('../models/book');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los libros' });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el libro' });
  }
};

const addBook = async (req, res) => {
  const { title, author, year } = req.body;
  try {
    const newBook = await Book.create({ title, author, year });
    res.json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar el libro' });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, year } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(
      id,
      { title, author, year },
      { new: true }
    );
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el libro' });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (book) {
      res.json({ message: 'Libro eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el libro' });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
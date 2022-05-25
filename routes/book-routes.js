const express = require("express");
const bookrouter = express.Router();
const Book = require("../model/Book")
const booksController = require("../controllers/book-controller");


bookrouter.get("/",booksController.getAllBooks);
bookrouter.post("/",booksController.addBook);
bookrouter.get("/:id",booksController.getById);
bookrouter.put("/:id",booksController.updateBook);
bookrouter.delete("/:id",booksController.deleteBook);


module.exports = bookrouter;


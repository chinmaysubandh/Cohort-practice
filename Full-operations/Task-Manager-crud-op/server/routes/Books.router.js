const { Router } = require("express");
const AddBook = require('../controllers/BookController.controllers.js');
const UpdateBook = require('../controllers/BookController.controllers.js');
const DeleteBook = require('../controllers/BookController.controllers.js');
const GetAllBooks = require('../controllers/BookController.controllers.js');
const BookRouter = Router();


BookRouter.get('/',GetAllBooks)
BookRouter.post('/', AddBook);
BookRouter.put('/:id', UpdateBook);
BookRouter.delete('/:id', DeleteBook);


module.exports = BookRouter;
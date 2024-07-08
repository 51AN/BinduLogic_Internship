import { Router } from 'express';
import * as bookController from '../controllers/book.controller';
import { isAuthenticated } from '../middleware/auth.middleware';

export const bookRouter = Router();

bookRouter.post('/books', isAuthenticated, bookController.createBook);
bookRouter.put('/books/:id', isAuthenticated, bookController.updateBook);
bookRouter.delete('/books/:id', isAuthenticated, bookController.deleteBook);
bookRouter.get('/books', bookController.getAllBooks);
bookRouter.get('/books/:id', bookController.getBookById);
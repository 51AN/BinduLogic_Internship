import { Router } from 'express';
import * as bookAuthorController from '../controllers/bookAuthor.controller';
import { isAuthenticated } from '../middleware/auth.middleware';

export const bookAuthorRouter = Router();

bookAuthorRouter.post('/bookAuthors', isAuthenticated, bookAuthorController.createBookAuthor);
bookAuthorRouter.put('/bookAuthors/:bookId/:authorId', isAuthenticated, bookAuthorController.updateBookAuthor);
bookAuthorRouter.delete('/bookAuthors/:bookId/:authorId', isAuthenticated, bookAuthorController.deleteBookAuthor);
bookAuthorRouter.get('/bookAuthors', bookAuthorController.getAllBookAuthors);
bookAuthorRouter.get('/bookAuthors/:bookId/:authorId', bookAuthorController.getBookAuthorById);

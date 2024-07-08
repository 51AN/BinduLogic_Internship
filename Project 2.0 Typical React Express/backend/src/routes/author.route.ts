import { Router } from 'express';
import * as authorController from '../controllers/author.controller';
import { isAuthenticated } from '../middleware/auth.middleware';

export const authorRouter = Router();

authorRouter.post('/authors', isAuthenticated, authorController.createAuthor);
authorRouter.put('/authors/:id', isAuthenticated, authorController.updateAuthor);
authorRouter.delete('/authors/:id', isAuthenticated, authorController.deleteAuthor);
authorRouter.get('/authors', authorController.getAllAuthors);
authorRouter.get('/authors/:id', authorController.getAuthorById);

import { Router } from 'express';
import * as libraryController from '../controllers/library.controller';
import { isAuthenticated } from '../middleware/auth.middleware';

export const libraryRouter = Router();

libraryRouter.post('/libraries', isAuthenticated, libraryController.createLibrary);
libraryRouter.put('/libraries/:id', isAuthenticated, libraryController.updateLibrary);
libraryRouter.delete('/libraries/:id', isAuthenticated, libraryController.deleteLibrary);
libraryRouter.get('/libraries', libraryController.getAllLibraries);
libraryRouter.get('/libraries/:id', libraryController.getLibraryById);
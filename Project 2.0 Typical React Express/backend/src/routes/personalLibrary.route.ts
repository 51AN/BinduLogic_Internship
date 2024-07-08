import { Router } from 'express';
import * as personalLibraryController from '../controllers/personalLibrary.controller';
import { isAuthenticated } from '../middleware/auth.middleware';

export const personalLibraryRouter = Router();

personalLibraryRouter.post('/personalLibraries', isAuthenticated, personalLibraryController.createPersonalLibrary);
personalLibraryRouter.put('/personalLibraries/:id', isAuthenticated, personalLibraryController.updatePersonalLibrary);
personalLibraryRouter.delete('/personalLibraries/:id', isAuthenticated, personalLibraryController.deletePersonalLibrary);
personalLibraryRouter.get('/personalLibraries', personalLibraryController.getAllPersonalLibraries);
personalLibraryRouter.get('/personalLibraries/:id', personalLibraryController.getPersonalLibraryById);

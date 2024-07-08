import { Router } from 'express';
import * as progressController from '../controllers/progress.controller';
import { isAuthenticated } from '../middleware/auth.middleware';

export const progressRouter = Router();

progressRouter.post('/progress', isAuthenticated, progressController.createProgress);
progressRouter.put('/progress/:id', isAuthenticated, progressController.updateProgress);
progressRouter.delete('/progress/:id', isAuthenticated, progressController.deleteProgress);
progressRouter.get('/progress', progressController.getAllProgress);
progressRouter.get('/progress/:id', progressController.getProgressById);
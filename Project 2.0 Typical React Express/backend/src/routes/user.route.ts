import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { isAuthenticated } from '../middleware/auth.middleware';

export const userRouter = Router();

userRouter.post('/users', isAuthenticated, userController.createUser);
userRouter.put('/users/:id', isAuthenticated, userController.updateUser);
userRouter.delete('/users/:id', isAuthenticated, userController.deleteUser);
userRouter.get('/users', isAuthenticated, userController.getAllUsers);
userRouter.get('/users/:id', isAuthenticated, userController.getUserById);
import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const createUser = async (req: Request, res: Response) => {
    const { name, password, email, age, personalLibraryId } = req.body;
    try {
        const newUser = await userService.createUser(name, password, email, age, personalLibraryId);
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, password, email, age, personalLibraryId } = req.body;
    try {
        const updatedUser = await userService.updateUser(id, name, password, email, age, personalLibraryId);
        if (!updatedUser) {
            res.status(404).json({ error: `User with id ${id} not found` });
        } else {
            res.status(200).json(updatedUser);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedUser = await userService.deleteUser(id);
        if (!deletedUser) {
            res.status(404).json({ error: `User with id ${id} not found` });
        } else {
            res.status(200).json(deletedUser);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const userList = await userService.getAllUsers();
        res.status(200).json(userList);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await userService.getUserById(id);
        if (!user) {
            res.status(404).json({ error: `User with id ${id} not found` });
        } else {
            res.status(200).json(user);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

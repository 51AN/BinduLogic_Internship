import { Request, Response } from 'express';
import * as progressService from '../services/progress.service';

export const createProgress = async (req: Request, res: Response) => {
    const { userId, bookId, onPage } = req.body;
    try {
        const newProgress = await progressService.createProgress(userId, bookId, onPage);
        res.status(201).json(newProgress);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const updateProgress = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { userId, bookId, onPage } = req.body;
    try {
        const updatedProgress = await progressService.updateProgress(id, userId, bookId, onPage);
        if (!updatedProgress) {
            res.status(404).json({ error: `Progress with id ${id} not found` });
        } else {
            res.status(200).json(updatedProgress);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const deleteProgress = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedProgress = await progressService.deleteProgress(id);
        if (!deletedProgress) {
            res.status(404).json({ error: `Progress with id ${id} not found` });
        } else {
            res.status(200).json(deletedProgress);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const getAllProgress = async (_req: Request, res: Response) => {
    try {
        const progressList = await progressService.getAllProgress();
        res.status(200).json(progressList);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const getProgressById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const progress = await progressService.getProgressById(id);
        if (!progress) {
            res.status(404).json({ error: `Progress with id ${id} not found` });
        } else {
            res.status(200).json(progress);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

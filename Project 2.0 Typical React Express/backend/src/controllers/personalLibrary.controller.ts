import { Request, Response } from 'express';
import * as personalLibraryService from '../services/personalLibrary.service';

export const createPersonalLibrary = async (req: Request, res: Response) => {
    const { userId } = req.body;
    try {
        const newPersonalLibrary = await personalLibraryService.createPersonalLibrary(userId);
        res.status(201).json(newPersonalLibrary);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const updatePersonalLibrary = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { userId } = req.body;
    try {
        const updatedPersonalLibrary = await personalLibraryService.updatePersonalLibrary(id, userId);
        if (!updatedPersonalLibrary) {
            res.status(404).json({ error: `Personal library with id ${id} not found` });
        } else {
            res.status(200).json(updatedPersonalLibrary);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const deletePersonalLibrary = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedPersonalLibrary = await personalLibraryService.deletePersonalLibrary(id);
        if (!deletedPersonalLibrary) {
            res.status(404).json({ error: `Personal library with id ${id} not found` });
        } else {
            res.status(200).json(deletedPersonalLibrary);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const getAllPersonalLibraries = async (_req: Request, res: Response) => {
    try {
        const personalLibraries = await personalLibraryService.getAllPersonalLibraries();
        res.status(200).json(personalLibraries);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const getPersonalLibraryById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const personalLibrary = await personalLibraryService.getPersonalLibraryById(id);
        if (!personalLibrary) {
            res.status(404).json({ error: `Personal library with id ${id} not found` });
        } else {
            res.status(200).json(personalLibrary);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

import { Request, Response } from 'express';
import * as libraryService from '../services/library.service';

export const createLibrary = async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
        const newLibrary = await libraryService.createLibrary(name);
        res.status(201).json(newLibrary);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const updateLibrary = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const updatedLibrary = await libraryService.updateLibrary(id, name);
        if (!updatedLibrary) {
            res.status(404).json({ error: `Library with id ${id} not found` });
        } else {
            res.status(200).json(updatedLibrary);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const deleteLibrary = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedLibrary = await libraryService.deleteLibrary(id);
        if (!deletedLibrary) {
            res.status(404).json({ error: `Library with id ${id} not found` });
        } else {
            res.status(200).json(deletedLibrary);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const getAllLibraries = async (_req: Request, res: Response) => {
    try {
        const libraries = await libraryService.getAllLibraries();
        res.status(200).json(libraries);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const getLibraryById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const library = await libraryService.getLibraryById(id);
        if (!library) {
            res.status(404).json({ error: `Library with id ${id} not found` });
        } else {
            res.status(200).json(library);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

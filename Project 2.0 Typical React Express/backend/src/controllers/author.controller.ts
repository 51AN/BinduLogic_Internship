import { Request, Response } from 'express';
import * as authorService from '../services/author.service';

export const createAuthor = async (req: Request, res: Response) => {
    const { name, libraryId } = req.body;
    try {
        const newAuthor = await authorService.createAuthor(name, libraryId);
        res.status(201).json(newAuthor);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateAuthor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, libraryId } = req.body;
    try {
        const updatedAuthor = await authorService.updateAuthor(id, name, libraryId);
        if (!updatedAuthor) {
            res.status(404).json({ error: `Author with id ${id} not found` });
        } else {
            res.status(200).json(updatedAuthor);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteAuthor = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedAuthor = await authorService.deleteAuthor(id);
        if (!deletedAuthor) {
            res.status(404).json({ error: `Author with id ${id} not found` });
        } else {
            res.status(200).json(deletedAuthor);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllAuthors = async (_req: Request, res: Response) => {
    try {
        const authors = await authorService.getAllAuthors();
        res.status(200).json(authors);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAuthorById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const author = await authorService.getAuthorById(id);
        if (!author) {
            res.status(404).json({ error: `Author with id ${id} not found` });
        } else {
            res.status(200).json(author);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

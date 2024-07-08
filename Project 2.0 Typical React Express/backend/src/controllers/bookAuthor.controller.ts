import { Request, Response } from 'express';
import * as bookAuthorService from '../services/bookAuthor.service';

export const createBookAuthor = async (req: Request, res: Response) => {
    const { bookId, authorId } = req.body;
    try {
        const newBookAuthor = await bookAuthorService.createBookAuthor(bookId, authorId);
        res.status(201).json(newBookAuthor);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const updateBookAuthor = async (req: Request, res: Response) => {
    const { bookId, authorId } = req.params;
    const { newBookId, newAuthorId } = req.body;
    try {
        const updatedBookAuthor = await bookAuthorService.updateBookAuthor(bookId, authorId, newBookId, newAuthorId);
        if (!updatedBookAuthor) {
            res.status(404).json({ error: `Book author relation with bookId ${bookId} and authorId ${authorId} not found` });
        } else {
            res.status(200).json(updatedBookAuthor);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const deleteBookAuthor = async (req: Request, res: Response) => {
    const { bookId, authorId } = req.params;
    try {
        const deletedBookAuthor = await bookAuthorService.deleteBookAuthor(bookId, authorId);
        if (!deletedBookAuthor) {
            res.status(404).json({ error: `Book author relation with bookId ${bookId} and authorId ${authorId} not found` });
        } else {
            res.status(200).json(deletedBookAuthor);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const getAllBookAuthors = async (_req: Request, res: Response) => {
    try {
        const bookAuthors = await bookAuthorService.getAllBookAuthors();
        res.status(200).json(bookAuthors);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const getBookAuthorById = async (req: Request, res: Response) => {
    const { bookId, authorId } = req.params;
    try {
        const bookAuthor = await bookAuthorService.getBookAuthorById(bookId, authorId);
        if (!bookAuthor) {
            res.status(404).json({ error: `Book author relation with bookId ${bookId} and authorId ${authorId} not found` });
        } else {
            res.status(200).json(bookAuthor);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

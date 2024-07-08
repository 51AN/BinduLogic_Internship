import { Request, Response } from 'express';
import * as bookService from '../services/book.service';

export const createBook = async (req: Request, res: Response) => {
    const { name, pages, publishedAt, libraryId, personalLibraryId, chapters } = req.body;
    try {
        const newBook = await bookService.createBook(name, pages, new Date(publishedAt), libraryId, personalLibraryId, chapters);
        res.status(201).json(newBook);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const updateBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, pages, publishedAt, libraryId, personalLibraryId, chapters } = req.body;
    try {
        const updatedBook = await bookService.updateBook(id, name, pages, new Date(publishedAt), libraryId, personalLibraryId, chapters);
        if (!updatedBook) {
            res.status(404).json({ error: `Book with id ${id} not found` });
        } else {
            res.status(200).json(updatedBook);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const deleteBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedBook = await bookService.deleteBook(id);
        if (!deletedBook) {
            res.status(404).json({ error: `Book with id ${id} not found` });
        } else {
            res.status(200).json(deletedBook);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const getAllBooks = async (_req: Request, res: Response) => {
    try {
        const books = await bookService.getAllBooks();
        res.status(200).json(books);
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

export const getBookById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const book = await bookService.getBookById(id);
        if (!book) {
            res.status(404).json({ error: `Book with id ${id} not found` });
        } else {
            res.status(200).json(book);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
};

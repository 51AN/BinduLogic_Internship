import * as bookRepository from '../repositories/book.repository';

export const createBook = async (
    name: string,
    pages: number,
    publishedAt: Date,
    libraryId: string,
    personalLibraryId: string,
    chapters?: number
) => {
    try {
        const book = await bookRepository.createBook(
            name,
            pages,
            publishedAt,
            libraryId,
            personalLibraryId,
            chapters
        );
        return book;
    } catch (error) {
        throw new Error(`Failed to create book: ${error}`);
    }
};

export const updateBook = async (
    id: string,
    name?: string,
    pages?: number,
    publishedAt?: Date,
    libraryId?: string,
    personalLibraryId?: string,
    chapters?: number
) => {
    try {
        const data: { name?: string; pages?: number; publishedAt?: Date; libraryId?: string; personalLibraryId?: string; chapters?: number } = {};
        if (name !== undefined) data.name = name;
        if (pages !== undefined) data.pages = pages;
        if (publishedAt !== undefined) data.publishedAt = publishedAt;
        if (libraryId !== undefined) data.libraryId = libraryId;
        if (personalLibraryId !== undefined) data.personalLibraryId = personalLibraryId;
        if (chapters !== undefined) data.chapters = chapters;

        const updatedBook = await bookRepository.updateBook(id, data.name!, data.pages!, data.publishedAt!, data.libraryId!, data.personalLibraryId!, data.chapters);
        if (!updatedBook) {
            throw new Error(`Book with id ${id} not found`);
        }
        return updatedBook;
    } catch (error) {
        throw new Error(`Failed to update book: ${error}`);
    }
};

export const deleteBook = async (id: string) => {
    try {
        const deletedBook = await bookRepository.deleteBook(id);
        if (!deletedBook) {
            throw new Error(`Book with id ${id} not found`);
        }
        return deletedBook;
    } catch (error) {
        throw new Error(`Failed to delete book: ${error}`);
    }
};

export const getAllBooks = async () => {
    try {
        const books = await bookRepository.getAllBooks();
        return books;
    } catch (error) {
        throw new Error(`Failed to fetch books: ${error}`);
    }
};

export const getBookById = async (id: string) => {
    try {
        const book = await bookRepository.getBookById(id);
        if (!book) {
            throw new Error(`Book with id ${id} not found`);
        }
        return book;
    } catch (error) {
        throw new Error(`Failed to fetch book: ${error}`);
    }
};

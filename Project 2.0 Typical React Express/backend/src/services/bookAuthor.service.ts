import * as bookAuthorRepository from '../repositories/bookAuthor.repository';

export const createBookAuthor = async (
    bookId: string,
    authorId: string
) => {
    try {
        const bookAuthor = await bookAuthorRepository.createBookAuthor(bookId, authorId);
        return bookAuthor;
    } catch (error) {
        throw new Error(`Failed to create book author relation: ${error}`);
    }
};

export const updateBookAuthor = async (
    bookId: string,
    authorId: string,
    newBookId?: string,
    newAuthorId?: string
) => {
    try {
        const updatedBookAuthor = await bookAuthorRepository.updateBookAuthor(bookId, authorId, newBookId, newAuthorId);
        if (!updatedBookAuthor) {
            throw new Error(`Book author relation with bookId ${bookId} and authorId ${authorId} not found`);
        }
        return updatedBookAuthor;
    } catch (error) {
        throw new Error(`Failed to update book author relation: ${error}`);
    }
};

export const deleteBookAuthor = async (
    bookId: string,
    authorId: string
) => {
    try {
        const deletedBookAuthor = await bookAuthorRepository.deleteBookAuthor(bookId, authorId);
        if (!deletedBookAuthor) {
            throw new Error(`Book author relation with bookId ${bookId} and authorId ${authorId} not found`);
        }
        return deletedBookAuthor;
    } catch (error) {
        throw new Error(`Failed to delete book author relation: ${error}`);
    }
};

export const getAllBookAuthors = async () => {
    try {
        const bookAuthors = await bookAuthorRepository.getAllBookAuthors();
        return bookAuthors;
    } catch (error) {
        throw new Error(`Failed to fetch book authors: ${error}`);
    }
};

export const getBookAuthorById = async (
    bookId: string,
    authorId: string
) => {
    try {
        const bookAuthor = await bookAuthorRepository.getBookAuthorById(bookId, authorId);
        if (!bookAuthor) {
            throw new Error(`Book author relation with bookId ${bookId} and authorId ${authorId} not found`);
        }
        return bookAuthor;
    } catch (error) {
        throw new Error(`Failed to fetch book author relation: ${error}`);
    }
};

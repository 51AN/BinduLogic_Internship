import * as authorRepository from '../repositories/author.repository';

export const createAuthor = async (
    name: string,
    libraryId: string
) => {
    try {
        const author = await authorRepository.createAuthor(name, libraryId);
        return author;
    } catch (error) {
        throw new Error(`Failed to create author: ${error}`);
    }
};

export const updateAuthor = async (
    id: string,
    name: string,
    libraryId: string
) => {
    try {
        const data: { name?: string; libraryId?: string } = {};
        if (name !== undefined) data.name = name;
        if (libraryId !== undefined) data.libraryId = libraryId;

        const updatedAuthor = await authorRepository.updateAuthor(id, data.name!, data.libraryId!);
        if (!updatedAuthor) {
            throw new Error(`Author with id ${id} not found`);
        }
        return updatedAuthor;
    } catch (error) {
        throw new Error(`Failed to update author: ${error}`);
    }
};

export const deleteAuthor = async (id: string) => {
    try {
        const deletedAuthor = await authorRepository.deleteAuthor(id);
        if (!deletedAuthor) {
            throw new Error(`Author with id ${id} not found`);
        }
        return deletedAuthor;
    } catch (error) {
        throw new Error(`Failed to delete author: ${error}`);
    }
};

export const getAllAuthors = async () => {
    try {
        const authors = await authorRepository.getAllAuthors();
        return authors;
    } catch (error) {
        throw new Error(`Failed to fetch authors: ${error}`);
    }
};

export const getAuthorById = async (id: string) => {
    try {
        const author = await authorRepository.getAuthorById(id);
        if (!author) {
            throw new Error(`Author with id ${id} not found`);
        }
        return author;
    } catch (error) {
        throw new Error(`Failed to fetch author: ${error}`);
    }
};

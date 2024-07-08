import * as libraryRepository from '../repositories/library.repository';

export const createLibrary = async (
    name: string
) => {
    try {
        const library = await libraryRepository.createLibrary(name);
        return library;
    } catch (error) {
        throw new Error(`Failed to create library: ${error}`);
    }
};

export const updateLibrary = async (
    id: string,
    name: string
) => {
    try {
        const updatedLibrary = await libraryRepository.updateLibrary(id, name);
        if (!updatedLibrary) {
            throw new Error(`Library with id ${id} not found`);
        }
        return updatedLibrary;
    } catch (error) {
        throw new Error(`Failed to update library: ${error}`);
    }
};

export const deleteLibrary = async (id: string) => {
    try {
        const deletedLibrary = await libraryRepository.deleteLibrary(id);
        if (!deletedLibrary) {
            throw new Error(`Library with id ${id} not found`);
        }
        return deletedLibrary;
    } catch (error) {
        throw new Error(`Failed to delete library: ${error}`);
    }
};

export const getAllLibraries = async () => {
    try {
        const libraries = await libraryRepository.getAllLibraries();
        return libraries;
    } catch (error) {
        throw new Error(`Failed to fetch libraries: ${error}`);
    }
};

export const getLibraryById = async (id: string) => {
    try {
        const library = await libraryRepository.getLibraryById(id);
        if (!library) {
            throw new Error(`Library with id ${id} not found`);
        }
        return library;
    } catch (error) {
        throw new Error(`Failed to fetch library: ${error}`);
    }
};

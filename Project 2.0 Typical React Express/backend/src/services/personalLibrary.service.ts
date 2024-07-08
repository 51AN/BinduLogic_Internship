import * as personalLibraryRepository from '../repositories/personalLibrary.repository';

export const createPersonalLibrary = async (
    userId: string
) => {
    try {
        const personalLibrary = await personalLibraryRepository.createPersonalLibrary(userId);
        return personalLibrary;
    } catch (error) {
        throw new Error(`Failed to create personal library: ${error}`);
    }
};

export const updatePersonalLibrary = async (
    id: string,
    userId: string
) => {
    try {
        const updatedPersonalLibrary = await personalLibraryRepository.updatePersonalLibrary(id, userId);
        if (!updatedPersonalLibrary) {
            throw new Error(`Personal library with id ${id} not found`);
        }
        return updatedPersonalLibrary;
    } catch (error) {
        throw new Error(`Failed to update personal library: ${error}`);
    }
};

export const deletePersonalLibrary = async (id: string) => {
    try {
        const deletedPersonalLibrary = await personalLibraryRepository.deletePersonalLibrary(id);
        if (!deletedPersonalLibrary) {
            throw new Error(`Personal library with id ${id} not found`);
        }
        return deletedPersonalLibrary;
    } catch (error) {
        throw new Error(`Failed to delete personal library: ${error}`);
    }
};

export const getAllPersonalLibraries = async () => {
    try {
        const personalLibraries = await personalLibraryRepository.getAllPersonalLibraries();
        return personalLibraries;
    } catch (error) {
        throw new Error(`Failed to fetch personal libraries: ${error}`);
    }
};

export const getPersonalLibraryById = async (id: string) => {
    try {
        const personalLibrary = await personalLibraryRepository.getPersonalLibraryById(id);
        if (!personalLibrary) {
            throw new Error(`Personal library with id ${id} not found`);
        }
        return personalLibrary;
    } catch (error) {
        throw new Error(`Failed to fetch personal library: ${error}`);
    }
};

import * as progressRepository from '../repositories/progress.repository';

export const createProgress = async (
    userId: string,
    bookId: string,
    onPage: number
) => {
    try {
        const progress = await progressRepository.createProgress(userId, bookId, onPage);
        return progress;
    } catch (error) {
        throw new Error(`Failed to create progress: ${error}`);
    }
};

export const updateProgress = async (
    id: string,
    userId?: string,
    bookId?: string,
    onPage?: number
) => {
    try {
        const data: { userId?: string; bookId?: string; onPage?: number} = {};
        if (userId !== undefined) data.userId = userId;
        if (bookId !== undefined) data.bookId = bookId;
        if (onPage !== undefined) data.onPage = onPage;

        const updatedProgress = await progressRepository.updateProgress(id, data.userId!, data.bookId!, data.onPage!);
        if (!updatedProgress) {
            throw new Error(`Progress with id ${id} not found`);
        }
        return updatedProgress;
    } catch (error) {
        throw new Error(`Failed to update progress: ${error}`);
    }
};

export const deleteProgress = async (id: string) => {
    try {
        const deletedProgress = await progressRepository.deleteProgress(id);
        if (!deletedProgress) {
            throw new Error(`Progress with id ${id} not found`);
        }
        return deletedProgress;
    } catch (error) {
        throw new Error(`Failed to delete progress: ${error}`);
    }
};

export const getAllProgress = async () => {
    try {
        const progressList = await progressRepository.getAllProgress();
        return progressList;
    } catch (error) {
        throw new Error(`Failed to fetch progress: ${error}`);
    }
};

export const getProgressById = async (id: string) => {
    try {
        const progress = await progressRepository.getProgressById(id);
        if (!progress) {
            throw new Error(`Progress with id ${id} not found`);
        }
        return progress;
    } catch (error) {
        throw new Error(`Failed to fetch progress: ${error}`);
    }
};

import prisma from "../db";
import { Progress } from "@prisma/client"

export const createProgress = async (
    userId: string,
    bookId: string,
    onPage: number
    
) => {
    return await prisma.progress.create({
        data: {
            onPage,
            user: {
                connect: {
                    id: userId
                }
            },
            book: {
                connect:{
                    id: bookId
                }
            }

        }
    })
}

export const updateProgress = async (
    id: string,
    userId: string,
    bookId: string,
    onPage: number,

) => {
    const data: any ={};
    if (userId !== undefined) data.userId = userId;
    if (bookId !== undefined) data.bookId = bookId;
    if (onPage !== undefined) data.onPage = onPage;

    return await prisma.progress.update({
        where: { id },
        data,
    })
}

export const deleteProgress = async (id: string) => {
    return await prisma.progress.delete({
        where: { id },
    })
}

export const getAllProgress = async () => {
    return await prisma.progress.findMany();
};

export const getProgressById = async (id: string) => {
    return await prisma.progress.findUnique({
        where: { id },
    });
};

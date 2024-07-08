import prisma from "../db";
import { Author } from '@prisma/client';


export const createAuthor = async (
    name: string,
    libraryId: string
) => {
    return await prisma.author.create({
        data: {
            name,
            library:{
                connect:{
                    id: libraryId
                }
            }
        }
    })
}

export const updateAuthor = async (
    id: string,
    name: string,
    libraryId: string
) => {
    const data: any ={};
    if (name !== undefined) data.name = name;
    if (libraryId !== undefined) data.libraryId = libraryId;

    return await prisma.author.update({
        where: { id },
        data,
    })
}

export const deleteAuthor = async (id: string) => {
    return await prisma.author.delete({
        where: { id },
    })
}

export const getAllAuthors = async () => {
    return await prisma.author.findMany();
};

export const getAuthorById = async (id: string) => {
    return await prisma.author.findUnique({
        where: { id },
    });
};
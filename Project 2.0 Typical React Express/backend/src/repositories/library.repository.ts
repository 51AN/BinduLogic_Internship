import prisma from "../db";
import { Library } from "@prisma/client"

export const createLibrary = async (
    name: string,
) => {
    return await prisma.library.create({
        data: {
            name,
        }
    })
}

export const updateLibrary = async (
    id: string,
    name: string,

) => {
    const data: any ={};
    if (name !== undefined) data.name = name;

    return await prisma.library.update({
        where: { id },
        data,
    })
}

export const deleteLibrary = async (id: string) => {
    return await prisma.library.delete({
        where: { id },
    })
}

export const getAllLibraries = async () => {
    return await prisma.library.findMany();
};

export const getLibraryById = async (id: string) => {
    return await prisma.library.findUnique({
        where: { id },
    });
};

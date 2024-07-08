import prisma from "../db";
import { PersonalLibrary } from "@prisma/client"

export const createPersonalLibrary = async (
    userId: string,
    
) => {
    return await prisma.personalLibrary.create({
        data: {
            user: {
                connect: {
                    id: userId
                }
            },

        }
    })
}

export const updatePersonalLibrary = async (
    id: string,
    userId: string,

) => {
    const data: any ={};
    if (userId !== undefined) data.userId = userId;

    return await prisma.personalLibrary.update({
        where: { id },
        data,
    })
}

export const deletePersonalLibrary = async (id: string) => {
    return await prisma.personalLibrary.delete({
        where: { id },
    })
}

export const getAllPersonalLibraries = async () => {
    return await prisma.personalLibrary.findMany();
};

export const getPersonalLibraryById = async (id: string) => {
    return await prisma.personalLibrary.findUnique({
        where: { id },
    });
};

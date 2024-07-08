import prisma from "../db";
import { Book } from "@prisma/client"

export const createBook = async (
    name: string,
    pages: number,
    publishedAt: Date,
    libraryId: string,
    personalLibraryId: string,
    chapters?: number
) => {
    return await prisma.book.create({
        data: {
            name,
            pages,
            publishedAt,
            chapters,
            library: {
                connect: {
                    id: libraryId
                }
            },
            personalLibrary: {
                connect: {
                    id: personalLibraryId
                }
            }

        }
    })
}

export const updateBook = async (
    id: string,
    name: string,
    pages: number,
    publishedAt: Date,
    libraryId: string,
    personalLibraryId: string,
    Chapters?: number
) => {
    const data: any ={};
    if (name !== undefined) data.name = name;
    if (pages !== undefined) data.pages = pages;
    if (publishedAt !== undefined) data.publishedAt = publishedAt;
    if (Chapters !== undefined) data.Chapters = Chapters;
    if (libraryId !== undefined) data.libraryId = libraryId;
    if (personalLibraryId !== undefined) data.personalLibraryId = personalLibraryId;

    return await prisma.book.update({
        where: { id },
        data,
    })
}

export const deleteBook = async (id: string) => {
    return await prisma.book.delete({
        where: { id },
    })
}

export const getAllBooks = async () => {
    return await prisma.book.findMany();
};

export const getBookById = async (id: string) => {
    return await prisma.book.findUnique({
        where: { id },
    });
};

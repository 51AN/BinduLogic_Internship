import prisma from "../db";
import { BookAuthor } from "@prisma/client"

export const createBookAuthor = async (
    bookId: string,
    authorId: string,
    
) => {
    return await prisma.bookAuthor.create({
        data: {
            book: {
                connect: {
                    id: bookId
                }
            },
            author: {
                connect: {
                    id: authorId
                }
            }

        }
    })
}

export const updateBookAuthor = async (
    bookId: string,
    authorId: string,
    newBookId?: string,
    newAuthorId?: string
): Promise<BookAuthor> => {
    const data: any = {};
    if (newBookId !== undefined) data.bookId = newBookId;
    if (newAuthorId !== undefined) data.authorId = newAuthorId;

    return await prisma.bookAuthor.update({
        where: {
            bookId_authorId: {
                bookId,
                authorId,
            },
        },
        data,
    });
};

export const deleteBookAuthor = async (
    bookId: string,
    authorId: string
): Promise<BookAuthor> => {
    return await prisma.bookAuthor.delete({
        where: {
            bookId_authorId: {
                bookId,
                authorId,
            },
        },
    });
};

export const getAllBookAuthors = async () => {
    return await prisma.bookAuthor.findMany();
};

export const getBookAuthorById = async (
    bookId: string,
    authorId: string
): Promise<BookAuthor | null> => {
    return await prisma.bookAuthor.findUnique({
        where: {
            bookId_authorId: {
                bookId,
                authorId,
            },
        },
    });
};
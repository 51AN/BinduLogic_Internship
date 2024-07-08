import prisma from "../db";
import { User } from "@prisma/client";

// Create User
export const createUser = async (
    name: string,
    password: string,
    email: string,
    age: number,
    personalLibraryId?: string
): Promise<User> => {
    return await prisma.user.create({
        data: {
            name,
            password,
            email,
            age,
            personalLibrary: personalLibraryId ? {
                connect: { id: personalLibraryId }
            } : undefined
        },
    });
};

// Update User
export const updateUser = async (
    id: string,
    name?: string,
    password?: string,
    email?: string,
    age?: number,
    personalLibraryId?: string
): Promise<User> => {
    const data: any = {};
    if (name !== undefined) data.name = name;
    if (password !== undefined) data.password = password;
    if (email !== undefined) data.email = email;
    if (age !== undefined) data.age = age;
    if (personalLibraryId !== undefined) data.personalLibrary = {
        connect: { id: personalLibraryId }
    };

    return await prisma.user.update({
        where: { id },
        data,
    });
};

// Delete User
export const deleteUser = async (id: string): Promise<User> => {
    return await prisma.user.delete({
        where: { id },
    });
};

// Get All Users
export const getAllUsers = async (): Promise<User[]> => {
    return await prisma.user.findMany();
};

// Get User by ID
export const getUserById = async (id: string): Promise<User | null> => {
    return await prisma.user.findUnique({
        where: { id },
    });
};

import * as userRepository from '../repositories/user.repository';
import { User } from '@prisma/client';

// Create User
export const createUser = async (
    name: string,
    password: string,
    email: string,
    age: number,
    personalLibraryId?: string
): Promise<User> => {
    try {
        const user = await userRepository.createUser(name, password, email, age, personalLibraryId);
        return user;
    } catch (error) {
        throw new Error(`Failed to create user: ${error}`);
    }
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
    try {
        const updatedUser = await userRepository.updateUser(id, name, password, email, age, personalLibraryId);
        if (!updatedUser) {
            throw new Error(`User with id ${id} not found`);
        }
        return updatedUser;
    } catch (error) {
        throw new Error(`Failed to update user: ${error}`);
    }
};

// Delete User
export const deleteUser = async (id: string): Promise<User> => {
    try {
        const deletedUser = await userRepository.deleteUser(id);
        if (!deletedUser) {
            throw new Error(`User with id ${id} not found`);
        }
        return deletedUser;
    } catch (error) {
        throw new Error(`Failed to delete user: ${error}`);
    }
};

// Get All Users
export const getAllUsers = async (): Promise<User[]> => {
    try {
        const userList = await userRepository.getAllUsers();
        return userList;
    } catch (error) {
        throw new Error(`Failed to fetch users: ${error}`);
    }
};

// Get User by ID
export const getUserById = async (id: string): Promise<User | null> => {
    try {
        const user = await userRepository.getUserById(id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        return user;
    } catch (error) {
        throw new Error(`Failed to fetch user: ${error}`);
    }
};

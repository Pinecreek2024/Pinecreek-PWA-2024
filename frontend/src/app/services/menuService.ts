// Importing necessary libraries and types
import axios from 'axios';
import { MenuItem } from '@/types/menuTypes'; // Ensure this type is correctly defined

const baseUrl = '/api/menu'; // Adjust to match your actual API endpoint

// Utility function to handle errors
const handleError = (error: unknown): Error => {
    if (axios.isAxiosError(error)) {
        // Handle Axios errors (responses from the server)
        return new Error(`Server Error: ${error.response?.data.message || error.message}`);
    } else if (error instanceof Error) {
        // Handle generic JavaScript errors
        return new Error(`Error: ${error.message}`);
    } else {
        // Handle cases where the error is unknown
        return new Error('An unknown error occurred');
    }
};

// Function to fetch all menu items
export const getMenuItems = async (): Promise<MenuItem[]> => {
    try {
        const response = await axios.get<MenuItem[]>(baseUrl);
        return response.data;
    } catch (error) {
        throw handleError(error);
    }
};

// Function to add a new menu item
export const addMenuItem = async (item: MenuItem): Promise<MenuItem> => {
    try {
        const response = await axios.post<MenuItem>(baseUrl, item);
        return response.data;
    } catch (error) {
        throw handleError(error);
    }
};

// Function to update a menu item
export const updateMenuItem = async (id: string, item: MenuItem): Promise<MenuItem> => {
    try {
        const response = await axios.put<MenuItem>(`${baseUrl}/${id}`, item);
        return response.data;
    } catch (error) {
        throw handleError(error);
    }
};

// Function to delete a menu item
export const deleteMenuItem = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
        throw handleError(error);
    }
};

// Additional functions for other operations can be added here as needed

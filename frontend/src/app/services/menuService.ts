// Import necessary libraries or types
import axios from 'axios';
import { MenuItem } from'@/types/menuTypes'; // Assuming you have defined MenuItem type

const baseUrl = '/api/menu'; // Adjust this based on your API endpoint

// Function to fetch all menu items
export const getMenuItems = async (): Promise<MenuItem[]> => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching menu items');
  }
};

// Function to add a new menu item
export const addMenuItem = async (item: MenuItem): Promise<MenuItem> => {
  try {
    const response = await axios.post(baseUrl, item);
    return response.data;
  } catch (error) {
    throw new Error('Error adding menu item');
  }
};

// Function to update a menu item
export const updateMenuItem = async (id: string, item: MenuItem): Promise<MenuItem> => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, item);
    return response.data;
  } catch (error) {
    throw new Error('Error updating menu item');
  }
};

// Function to delete a menu item
export const deleteMenuItem = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    throw new Error('Error deleting menu item');
  }
};

// You can add more functions as required for your application

// Import Axios and necessary types
import axios from 'axios';
import { User } from '@/types/userTypes'; // Replace with your actual User type

const baseUrl = '/api/users'; // Update with your Django API endpoint

// Fetch all users
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(baseUrl);
    // Assuming Django returns data directly without a nested structure
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

// Fetch a specific user by ID
export const getUserById = async (id: string): Promise<User> => {
  try {
    const response = await axios.get(`${baseUrl}/${id}/`); // Django REST convention often uses trailing slashes
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user by ID');
  }
};

// Create a new user
export const createUser = async (userData: User): Promise<User> => {
  try {
    const response = await axios.post(baseUrl + '/', userData); // Django REST convention often uses trailing slashes
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};

// Update an existing user
export const updateUser = async (id: string, userData: User): Promise<User> => {
  try {
    const response = await axios.put(`${baseUrl}/${id}/`, userData); // Django REST convention often uses trailing slashes
    return response.data;
  } catch (error) {
    throw new Error('Error updating user');
  }
};

// Delete a user
export const deleteUser = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${baseUrl}/${id}/`); // Django REST convention often uses trailing slashes
  } catch (error) {
    throw new Error('Error deleting user');
  }
};

// Import necessary libraries or types
import axios from 'axios';
import { Product } from '@/types/productTypes'; // Replace with your actual Product type

const baseUrl = '/api/products'; // Adjust this based on your API endpoint

// Function to fetch all products
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching products');
  }
};

// Function to fetch a single product by ID
export const getProductById = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching product with ID: ${id}`);
  }
};

// Function to add a new product
export const addProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await axios.post(baseUrl, product);
    return response.data;
  } catch (error) {
    throw new Error('Error adding product');
  }
};

// Function to update a product
export const updateProduct = async (id: string, product: Product): Promise<Product> => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, product);
    return response.data;
  } catch (error) {
    throw new Error(`Error updating product with ID: ${id}`);
  }
};

// Function to delete a product
export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    throw new Error(`Error deleting product with ID: ${id}`);
  }
};

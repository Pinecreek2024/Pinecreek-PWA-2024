// Import Axios for HTTP requests and any types you might have defined
import axios from 'axios';
import { Order } from '@/types/orderTypes'; // Replace with your actual Order type

const baseUrl = '/api/orders'; // Update with your actual API endpoint

// Fetch all orders
export const getOrders = async (): Promise<Order[]> => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching orders');
  }
};

// Fetch a specific order by ID
export const getOrderById = async (id: string): Promise<Order> => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching order by ID');
  }
};

// Create a new order
export const createOrder = async (orderData: Order): Promise<Order> => {
  try {
    const response = await axios.post(baseUrl, orderData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating order');
  }
};

// Update an existing order
export const updateOrder = async (id: string, orderData: Order): Promise<Order> => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, orderData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating order');
  }
};

// Delete an order
export const deleteOrder = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    throw new Error('Error deleting order');
  }
};


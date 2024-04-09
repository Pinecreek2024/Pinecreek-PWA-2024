import axios from 'axios';

const API_URL = 'http://localhost:8000/api/customer_portal/';

// Function to get customer accounts
export const getCustomerAccounts = async () => {
    try {
        const response = await axios.get(`${API_URL}accounts/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to get a specific customer account by ID
export const getCustomerAccountById = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}accounts/${id}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to create a new customer account
export const createCustomerAccount = async (accountData: any) => {
    try {
        const response = await axios.post(`${API_URL}accounts/`, accountData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to update a customer account
export const updateCustomerAccount = async (id: number, accountData: any) => {
    try {
        const response = await axios.put(`${API_URL}accounts/${id}/`, accountData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to delete a customer account
export const deleteCustomerAccount = async (id: number) => {
    try {
        const response = await axios.delete(`${API_URL}accounts/${id}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

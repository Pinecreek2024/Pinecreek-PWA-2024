import axios from 'axios';
import { AxiosResponse } from 'axios'; // Add missing import statement
// Setting up the base URL for the local Django backend
const LOCAL_DJANGO_API_URL = 'http://localhost:8000/api'; // Adjust the port if different

const apiService = {
  get: async (endpoint: string) => {
    try {
      const response: AxiosResponse = await axios.get(`${LOCAL_DJANGO_API_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error('Error in GET request:', error);
      throw error;
    }
  },

  post: async (endpoint: string, data: any) => {
    try {
      const response: AxiosResponse = await axios.post(`${LOCAL_DJANGO_API_URL}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error('Error in POST request:', error);
      throw error;
    }
  },

  update: async (endpoint: string, data: any) => {
    try {
      const response: AxiosResponse = await axios.put(`${LOCAL_DJANGO_API_URL}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error('Error in PUT request:', error);
      throw error;
    }
  },

  delete: async (endpoint: string) => {
    try {
      const response: AxiosResponse = await axios.delete(`${LOCAL_DJANGO_API_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error('Error in DELETE request:', error);
      throw error;
    }
  }
};

export default apiService;

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/event_quotations/';

// Function to get all events
export const getEvents = async () => {
    try {
        const response = await axios.get(`${API_URL}events/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to get a specific event by ID
export const getEventById = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}events/${id}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to create a new event
export const createEvent = async (eventData: any) => {
    try {
        const response = await axios.post(`${API_URL}events/`, eventData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to update an event
export const updateEvent = async (id: number, eventData: any) => {
    try {
        const response = await axios.put(`${API_URL}events/${id}/`, eventData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to delete an event
export const deleteEvent = async (id: number) => {
    try {
        const response = await axios.delete(`${API_URL}events/${id}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

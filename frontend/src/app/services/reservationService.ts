import axios from 'axios';

const API_URL = 'http://localhost:8000/api/table_reservations/';

// Function to get all reservations
export const getReservations = async () => {
    try {
        const response = await axios.get(`${API_URL}reservations/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to get a specific reservation by ID
export const getReservationById = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}reservations/${id}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to create a new reservation
export const createReservation = async (reservationData: any) => {
    try {
        const response = await axios.post(`${API_URL}reservations/`, reservationData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to update a reservation
export const updateReservation = async (id: number, reservationData: any) => {
    try {
        const response = await axios.put(`${API_URL}reservations/${id}/`, reservationData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Function to delete a reservation
export const deleteReservation = async (id: number) => {
    try {
        const response = await axios.delete(`${API_URL}reservations/${id}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Import Axios and necessary types
import axios from 'axios';
import { Reservation } from '@/types/reservationTypes'; // Replace with your actual Reservation type

const baseUrl = '/api/reservations'; // Update with your API endpoint

// Fetch all reservations
export const getReservations = async (): Promise<Reservation[]> => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching reservations');
  }
};

// Fetch a specific reservation by ID
export const getReservationById = async (id: string): Promise<Reservation> => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching reservation by ID');
  }
};

// Create a new reservation
export const createReservation = async (reservationData: Reservation): Promise<Reservation> => {
  try {
    const response = await axios.post(baseUrl, reservationData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating reservation');
  }
};

// Update an existing reservation
export const updateReservation = async (id: string, reservationData: Reservation): Promise<Reservation> => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, reservationData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating reservation');
  }
};

// Delete a reservation
export const deleteReservation = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    throw new Error('Error deleting reservation');
  }
};

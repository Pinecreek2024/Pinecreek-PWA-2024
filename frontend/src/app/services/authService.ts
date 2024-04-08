import axios from 'axios';

// Pointing to the local Django backend
const LOCAL_API_BASE_URL = 'http://localhost:8000/api'; // Adjust port if different

const eventService = {
  getEvents: async () => {
    try {
      const response = await axios.get(`${LOCAL_API_BASE_URL}/events/`);
      return response.data; // Returns a list of events
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  getEventById: async (eventId: number) => {
    try {
      const response = await axios.get(`${LOCAL_API_BASE_URL}/events/${eventId}/`);
      return response.data; // Returns details of a specific event
    } catch (error) {
      console.error(`Error fetching event ${eventId}:`, error);
      throw error;
    }
  },

  bookEvent: async (eventId: number, bookingDetails: any) => {
    try {
      const response = await axios.post(`${LOCAL_API_BASE_URL}/events/${eventId}/book/`, bookingDetails);
      return response.data; // Confirmation or details of the booked event
    } catch (error) {
      console.error(`Error booking event ${eventId}:`, error);
      throw error;
    }
  },

  // Additional event-related functions can be added here
};

export default eventService;

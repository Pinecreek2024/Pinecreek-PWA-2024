// reservationTypes.ts

export interface Reservation {
    id: string; // Unique identifier for the reservation
    customerName: string; // Name of the customer making the reservation
    customerEmail: string; // Email of the customer
    reservationDate: Date; // Date of the reservation
    timeSlot: string; // Reserved time slot (e.g., "18:30", "20:00")
    numberOfGuests: number; // Number of guests for the reservation
    specialRequests?: string; // Optional field for any special requests
    contactNumber?: string; // Optional contact number
    // Additional fields such as reservation status, table number, etc., can be added as needed
  }
  
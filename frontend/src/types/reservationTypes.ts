// Basic structure for a reservation
export interface Reservation {
    id: string;
    customerName: string;
    customerEmail: string;
    numberOfGuests: number;
    reservationDate: Date; // Or string if using a date format like ISO 8601
    specialRequests?: string; // Optional property for special requests
    status: ReservationStatus; // Enum for reservation status
    // Add any other relevant properties here
  }
  
  // Enum for reservation status, can be expanded as needed
  export enum ReservationStatus {
    Pending = "Pending",
    Confirmed = "Confirmed",
    Cancelled = "Cancelled",
    Completed = "Completed",
  }
  
  // If you have other related types or enums, define them here
  
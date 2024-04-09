// bookingsInterface.ts

export interface BookingDetails {
    name: string;
    email: string;
    date: Date;
    numberOfGuests: number;
    specialRequests?: string; // Optional field for any special requests or instructions
    eventType?: string; // For event-specific bookings
    contactNumber?: string; // Optional contact number
  }
  
  export interface EventBooking extends BookingDetails {
    eventType: string; // Event type is required for event bookings
  }
  
  export interface ReservationBooking extends BookingDetails {
    timeSlot: string; // Time slot is specific to reservations
  }
  
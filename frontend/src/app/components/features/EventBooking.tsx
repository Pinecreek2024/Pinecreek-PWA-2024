import React, { useState } from 'react';
import DatePicker from '@/components/ui/DatePicker';
import TextInput from '@/components/ui/TextInput';
import TextArea from '@/components/ui/TextArea';
import Button from '@/components/common/Button';
import eventService from '@/services/eventService';
import styles from './EventBooking.module.css';

interface BookingDetails {
  eventType: string;
  eventDate: Date;
  numberOfGuests: number;
  additionalDetails: string;
}

const EventBooking: React.FC = () => {
  const [eventType, setEventType] = useState<string>('');
  const [eventDate, setEventDate] = useState<Date>(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState<number>(0);
  const [additionalDetails, setAdditionalDetails] = useState<string>('');

  const eventId = 1; // Placeholder for event ID

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const bookingDetails: BookingDetails = {
      eventType,
      eventDate,
      numberOfGuests,
      additionalDetails
    };

    try {
      const bookingConfirmation = await eventService.bookEvent(eventId, bookingDetails);
      // Handle successful booking here
    } catch (error) {
      console.error('Error booking event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextInput
        label="Event Type"
        name="eventType"
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
      />
      <DatePicker
        label="Event Date"
        selectedDate={eventDate}
        onChange={setEventDate}
      />
      <TextInput
        label="Number of Guests"
        name="numberOfGuests"
        type="number"
        value={numberOfGuests.toString()} // Convert number to string for input
        onChange={(e) => setNumberOfGuests(parseInt(e.target.value, 10) || 0)}
      />
      <TextArea
        label="Additional Details"
        name="additionalDetails"
        value={additionalDetails}
        onChange={(e) => setAdditionalDetails(e.target.value)}
      />
      <Button type="submit">Book Event</Button>
    </form>
  );
};

export default EventBooking;

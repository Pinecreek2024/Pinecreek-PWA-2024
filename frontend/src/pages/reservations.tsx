// frontend/src/pages/reservations.tsx
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import TextInput from '@/components/ui/TextInput';
import CustomDatePicker from '@/components/ui/DatePicker'; // Update the import to use CustomDatePicker
import Button from '@/components/common/Button';
import styles from './reservations.module.css';

const ReservationsPage: React.FC = () => {
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    date: new Date(), // Initialize with a default Date object
    time: '',
    numberOfPeople: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReservationData({ ...reservationData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Date) => {
    setReservationData({ ...reservationData, date });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...reservationData,
        date: reservationData.date.toISOString().split('T')[0] // Format the date for backend
      };
      const response = await fetch('http://localhost:8000/api/reservations/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log('Reservation submitted successfully');
    } catch (error) {
      console.error('Failed to submit reservation:', error);
    }
  };

  return (
    <PageLayout title="Reservations" description="Book a table">
      <div className={styles.reservationsContainer}>
        <form onSubmit={handleSubmit} className={styles.reservationsForm}>
          <TextInput 
            label="Name"
            name="name"
            placeholder="Enter your name"
            value={reservationData.name}
            onChange={handleInputChange}
          />
          <TextInput 
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={reservationData.email}
            onChange={handleInputChange}
          />
          <CustomDatePicker 
            label="Reservation Date"
            selectedDate={reservationData.date}
            onChange={handleDateChange}
          />
          <TextInput 
            label="Time"
            name="time"
            placeholder="Enter time (e.g., 18:00)"
            value={reservationData.time}
            onChange={handleInputChange}
          />
          <TextInput 
            label="Number of People"
            name="numberOfPeople"
            type="number"
            placeholder="Enter number of people"
            value={reservationData.numberOfPeople}
            onChange={handleInputChange}
          />
          <Button type="submit" className={styles.reservationButton}>Book Table</Button>
        </form>
      </div>
    </PageLayout>
  );
};

export default ReservationsPage;

import React, { useState } from 'react';
import DatePicker from '@/components/ui/DatePicker';
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/common/Button';
import styles from './reservations.module.css';
import { createReservation } from '@/services/reservationService'; // Assuming you have this service

const ReservationsPage: React.FC = () => {
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    numberOfPeople: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReservationData({ ...reservationData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Date) => {
    setReservationData({ ...reservationData, date: date.toISOString().split('T')[0] });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Assuming createReservation function takes an object with the reservation data
      await createReservation(reservationData);
      // Optionally, clear the form or navigate the user to a success page
    } catch (err) {
      setError('Failed to book the table. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.reservationsContainer}>
      <form onSubmit={handleSubmit} className={styles.reservationsForm}>
        {/* Inputs remain the same */}
        <Button type="submit" className={styles.reservationButton} disabled={loading}>
          {loading ? 'Booking...' : 'Book Table'}
        </Button>
        {error && <div className={styles.errorMessage}>{error}</div>}
      </form>
    </div>
  );
};

export default ReservationsPage;

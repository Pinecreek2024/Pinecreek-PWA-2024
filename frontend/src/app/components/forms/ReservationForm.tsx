import React, { useState } from 'react';
import DatePicker from '@/components/ui/DatePicker';
import Dropdown from '@/components/ui/Dropdown';
import TextInput from '@/components/ui/TextInput';
import Button from '@/components/common/Button';
import styles from './ReservationForm.module.css';

const ReservationForm: React.FC = () => {
  const [reservationDate, setReservationDate] = useState<Date>(new Date());
  const [timeSlot, setTimeSlot] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  // Function to generate time slots with 30-minute intervals
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 18; hour <= 22; hour++) {
      slots.push({ value: `${hour}:00`, label: `${hour % 12 || 12}:00 ${hour >= 12 ? 'PM' : 'AM'}` });
      slots.push({ value: `${hour}:30`, label: `${hour % 12 || 12}:30 ${hour >= 12 ? 'PM' : 'AM'}` });
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!timeSlot || !guestCount || !contactName || !contactNumber) {
      alert('Please fill in all fields.');
      return;
    }
    // Form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <DatePicker
        label="Reservation Date"
        name="reservationDate"  // Add 'name' attribute
        selectedDate={reservationDate}
        onChange={setReservationDate}
      />
      <Dropdown
        label="Time Slot"
        name="timeSlot"
        options={timeSlots}
        value={timeSlot}
        onChange={e => setTimeSlot(e.target.value)}
      />
      <TextInput
        label="Number of Guests"
        name="guestCount"
        type="number"
        value={guestCount}
        onChange={e => setGuestCount(e.target.value)}
      />
      <TextInput
        label="Contact Name"
        name="contactName"
        value={contactName}
        onChange={e => setContactName(e.target.value)}
      />
      <TextInput
        label="Contact Number"
        name="contactNumber"
        value={contactNumber}
        onChange={e => setContactNumber(e.target.value)}
      />
      <Button type="submit">Reserve Table</Button>
    </form>
  );
};

export default ReservationForm;

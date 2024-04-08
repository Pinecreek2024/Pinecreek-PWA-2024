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

  const timeSlots = [
    { value: '18:00', label: '6:00 PM' },
    { value: '20:00', label: '8:00 PM' },
    // Add more time slots as needed
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <DatePicker label="Reservation Date" selectedDate={reservationDate} onChange={setReservationDate} />
      <Dropdown label="Time Slot" name="timeSlot" options={timeSlots} value={timeSlot} onChange={e => setTimeSlot(e.target.value)} />
      <TextInput label="Number of Guests" name="guestCount" type="number" value={guestCount} onChange={e => setGuestCount(e.target.value)} />
      <TextInput label="Contact Name" name="contactName" value={contactName} onChange={e => setContactName(e.target.value)} />
      <TextInput label="Contact Number" name="contactNumber" value={contactNumber} onChange={e => setContactNumber(e.target.value)} />
      <Button onClick={() => {}}>Reserve Table</Button>
    </form>
  );
};

export default ReservationForm;

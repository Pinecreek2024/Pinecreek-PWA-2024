import React, { useState } from 'react';
import DatePicker from '@/components/ui/DatePicker';
import TextInput from '@/components/ui/TextInput';
import TextArea from '@/components/ui/TextArea';
import Button from '@/components/common/Button';
import styles from './EventQuoteForm.module.css';

const EventQuoteForm: React.FC = () => {
  const [eventType, setEventType] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [eventDate, setEventDate] = useState<Date>(new Date());
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!eventType || !guestCount || !additionalInfo) {
      alert('Please fill out all fields.');
      return;
    }

    const quoteRequestData = {
      eventType,
      guestCount,
      eventDate: eventDate.toISOString(), // Adjust formatting as required
      additionalInfo
    };

    try {
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:8000/api/event-quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteRequestData),
      });

      if (response.ok) {
        alert('Quote request submitted successfully!');
        // Reset form or further actions
      } else {
        alert('Failed to submit quote request.');
      }
    } catch (error) {
      console.error('Error submitting quote request:', error);
      alert('Error in form submission.');
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
      <TextInput
        label="Number of Guests"
        name="guestCount"
        type="number"
        value={guestCount}
        onChange={(e) => setGuestCount(e.target.value)}
      />
      <DatePicker
        label="Event Date"
        selectedDate={eventDate}
        onChange={setEventDate}
      />
      <TextArea
        label="Additional Information"
        name="additionalInfo"
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
      />
      <Button type="submit">Request Quote</Button>
    </form>
  );
};

export default EventQuoteForm;

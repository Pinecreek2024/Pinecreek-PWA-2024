import React, { useState } from 'react';
import DatePicker from '@/components/ui/DatePicker';
import TextInput from '@/components/ui/TextInput';
import TextArea from '@/components/ui/TextArea'; // Assuming a TextArea component for larger text input
import Button from '@/components/common/Button';
import styles from './EventQuoteForm.module.css';

const EventQuoteForm: React.FC = () => {
  const [eventType, setEventType] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [eventDate, setEventDate] = useState<Date>(new Date());
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
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
      <Button onClick={() => {}}>Request Quote</Button>
    </form>
  );
};

export default EventQuoteForm;

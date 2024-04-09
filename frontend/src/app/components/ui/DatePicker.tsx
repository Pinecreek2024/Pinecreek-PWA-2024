import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.css'; // Ensure this CSS module exists

// Updated interface with 'name' attribute
interface DatePickerProps {
  label: string;
  name: string; // Added 'name' property
  selectedDate: Date;
  onChange: (date: Date) => void;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({ label, name, selectedDate, onChange }) => {
  return (
    <div className={styles.datePickerGroup}>
      <label htmlFor={name}>{label}</label> {/* Use htmlFor for accessibility */}
      <DatePicker
        name={name} // Use the name property
        selected={selectedDate}
        onChange={onChange}
        className={styles.datePicker}
      />
    </div>
  );
};

export default CustomDatePicker;

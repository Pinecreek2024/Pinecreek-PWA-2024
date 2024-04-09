// frontend/src/app/components/ui/DatePicker/CustomDatePicker.tsx
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.css'; // Ensure this CSS module exists

interface DatePickerProps {
  label: string;
  selectedDate: Date;
  onChange: (date: Date) => void;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({ label, selectedDate, onChange }) => {
  return (
    <div className={styles.datePickerGroup}>
      <label>{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        className={styles.datePicker}
      />
    </div>
  );
};

export default CustomDatePicker;

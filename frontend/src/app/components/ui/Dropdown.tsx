import React from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, name, options, value, onChange }) => {
  return (
    <div className={styles.dropdownGroup}>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} value={value} onChange={onChange} className={styles.dropdown}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

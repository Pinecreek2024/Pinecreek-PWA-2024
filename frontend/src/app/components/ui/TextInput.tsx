import React from 'react';
import styles from './TextInput.module.css'; // Ensure this CSS module exists

interface TextInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, name, type = 'text', placeholder, value, onChange }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.textInput}
      />
    </div>
  );
};

export default TextInput;

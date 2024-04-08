import React from 'react';
import styles from './TextInput.module.css';

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, value, onChange }) => {
  return (
    <div className={styles.textAreaGroup}>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={styles.textArea}
      />
    </div>
  );
};

export default TextArea;

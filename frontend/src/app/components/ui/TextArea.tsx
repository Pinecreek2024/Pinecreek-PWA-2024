import React from 'react';

interface TextAreaProps {
  label: string;
  name: string;
  placeholder?: string; // Optional placeholder prop
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, placeholder, value, onChange }) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // You can add other necessary attributes and styles here
      />
    </div>
  );
};

export default TextArea;

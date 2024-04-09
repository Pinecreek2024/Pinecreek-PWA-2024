import React from 'react';
import styles from './ToggleSwitch.module.css';

interface ToggleSwitchProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  label?: string; // Optional label
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isChecked, onChange, label }) => {
  return (
    <label className={styles.switch}>
      {label && <span className={styles.label}>{label}</span>}
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={(e) => onChange(e.target.checked)}
        aria-label={label} 
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ToggleSwitch;

import React from 'react';
import styles from './IconButton.module.css';

interface IconButtonProps {
  icon: React.ReactNode; // Assuming icon is passed as a React component, e.g., from a library like FontAwesome
  onClick: () => void;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, ariaLabel }) => {
  return (
    <button
      className={styles.iconButton}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default IconButton;

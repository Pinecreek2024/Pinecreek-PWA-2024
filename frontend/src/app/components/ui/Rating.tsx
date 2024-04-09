import React from 'react';
import styles from './Rating.module.css';

interface RatingProps {
  value: number; // Rating value, e.g., 4.5
  max: number; // Maximum rating value, typically 5
}

const Rating: React.FC<RatingProps> = ({ value, max }) => {
  // Round the rating value to nearest 0.5 for display
  const roundedValue = Math.round(value * 2) / 2;

  return (
    <div className={styles.rating} aria-label={`Rating: ${roundedValue} out of ${max}`}>
      {[...Array(max)].map((_, i) => (
        <span key={i} className={i < roundedValue ? styles.filled : styles.empty}>
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;

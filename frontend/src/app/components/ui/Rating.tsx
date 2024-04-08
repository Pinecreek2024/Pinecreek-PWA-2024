import React from 'react';
import styles from './Rating.module.css';

interface RatingProps {
  value: number; // Rating value, e.g., 4.5
  max: number; // Maximum rating value, typically 5
}

const Rating: React.FC<RatingProps> = ({ value, max }) => {
  return (
    <div className={styles.rating}>
      {[...Array(max)].map((_, i) => (
        <span key={i} className={i < value ? styles.filled : styles.empty}>
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;

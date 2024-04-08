import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Card;

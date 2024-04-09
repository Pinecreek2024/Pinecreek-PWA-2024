// frontend/src/app/components/sections/ReviewsSection.tsx
import React, { useEffect, useState } from 'react';
import { Review } from '@/interfaces/reviewsInterfaces'; // Import the Review interface
import styles from './ReviewsSection.module.css';

const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className={styles.reviewsSection}>
      <h2>Customer Reviews</h2>
      {reviews.map(review => (
        <div key={review.id} className={styles.review}>
          <div className={styles.reviewHeader}>
            <span className={styles.author}>{review.author}</span>
            <span className={styles.date}>{review.date}</span>
          </div>
          <div className={styles.content}>{review.content}</div>
          <div className={styles.rating}>Rating: {review.rating} / 5</div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;

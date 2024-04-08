import React from 'react';
import styles from './ReviewsSection.module.css';

// Sample data structure for a review
interface Review {
  id: number;
  author: string;
  date: string;
  content: string;
  rating: number; // Assuming a rating out of 5
}

const ReviewsSection: React.FC = () => {
  const reviews: Review[] = [
    // Sample reviews; in a real application, these would be fetched from an API
    { id: 1, author: 'Jane Doe', date: '2022-01-15', content: 'Great experience...', rating: 5 },
    { id: 2, author: 'John Smith', date: '2022-01-20', content: 'Loved the ambiance...', rating: 4 },
    // Additional reviews as needed
  ];

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

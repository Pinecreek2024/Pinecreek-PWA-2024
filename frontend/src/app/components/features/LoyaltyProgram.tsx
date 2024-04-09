import React, { useState, useEffect } from 'react';
import Button from '@/components/common/Button';
import styles from './LoyaltyProgram.module.css';

const LoyaltyProgram: React.FC = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (isEnrolled) {
      // Fetch points from API when enrolled
      fetchPoints();
    }
  }, [isEnrolled]);

  const handleEnroll = async () => {
    // Enroll logic here (e.g., API call to enroll the user)
    try {
      const response = await fetch('http://localhost:8000/api/enroll', {
        method: 'POST',
        // Include necessary headers, body, etc.
      });

      if (response.ok) {
        setIsEnrolled(true);
        fetchPoints(); // Fetch points after successful enrollment
      } else {
        console.error('Failed to enroll in loyalty program');
      }
    } catch (error) {
      console.error('Error enrolling in loyalty program:', error);
    }
  };

  const fetchPoints = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/points');
      if (response.ok) {
        const data = await response.json();
        setPoints(data.points); // Assume the response has a 'points' field
      } else {
        console.error('Failed to fetch points');
      }
    } catch (error) {
      console.error('Error fetching points:', error);
    }
  };

  return (
    <div className={styles.loyaltyProgram}>
      <h2>Loyalty Program</h2>
      {!isEnrolled ? (
        <div className={styles.enroll}>
          <p>Join our loyalty program and start earning points!</p>
          <Button onClick={handleEnroll}>Enroll Now</Button>
        </div>
      ) : (
        <div className={styles.memberInfo}>
          <p>You have {points} points.</p>
          {/* Additional member-specific information */}
        </div>
      )}
    </div>
  );
};

export default LoyaltyProgram;
